import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

const fallbackFilePath = path.join(process.cwd(), "data", "contact-submissions.json");

async function saveFallbackSubmission(payload: Record<string, unknown>) {
  await mkdir(path.dirname(fallbackFilePath), { recursive: true });

  let existing: Record<string, unknown>[] = [];
  try {
    const raw = await readFile(fallbackFilePath, "utf8");
    existing = JSON.parse(raw);
  } catch {
    existing = [];
  }

  existing.push({
    ...payload,
    createdAt: new Date().toISOString(),
    savedVia: "local-fallback",
  });

  await writeFile(fallbackFilePath, JSON.stringify(existing, null, 2));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json({ error: "Please provide your name, email, and message" }, { status: 400 });
    }

    const sheetId = process.env.GOOGLE_SHEET_ID || process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID;
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY || process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY;

    if (sheetId && serviceAccountEmail && privateKey) {
      try {
        const serviceAccountAuth = new JWT({
          email: serviceAccountEmail,
          key: privateKey.replace(/\\n/g, "\n"),
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const doc = new GoogleSpreadsheet(sheetId, serviceAccountAuth);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];

        await sheet.addRow({
          Name: body.name,
          Email: body.email,
          Phone: body.phone || "N/A",
          Service: body.service,
          Budget: body.budget,
          Message: body.message,
          Timestamp: new Date().toLocaleString(),
        });

        return NextResponse.json({ success: true, storedIn: "google-sheets" });
      } catch (error) {
        console.error("Google Sheets write failed, falling back to local file:", error);
      }
    }

    await saveFallbackSubmission(body);
    return NextResponse.json({ success: true, storedIn: "local-fallback" });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json({ error: "Failed to submit the form" }, { status: 500 });
  }
}
