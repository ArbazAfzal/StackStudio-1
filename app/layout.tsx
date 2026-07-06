import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Preloader } from "@/components/layout/preloader";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geist = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Stack Studio | Next-Gen Web & Mobile Development",
  description:
    "Stack Studio builds blazing-fast web apps, mobile apps, and AI solutions — delivered in days, not months.",
  metadataBase: new URL("https://stackstudio.dev"),
  openGraph: {
    title: "Stack Studio | Next-Gen Web & Mobile Development",
    description: "Next-gen web, mobile & AI solutions — delivered in days, not months.",
    images: ["/opengraph-image"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stack Studio",
    description: "Next-gen web, mobile & AI solutions.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geist.variable} bg-black text-white antialiased`}>
        <SmoothScrollProvider>
          <Preloader />
          <CustomCursor />
           <Navbar />
           <PageTransition>{children}</PageTransition>
           <a
             href="https://wa.me/923269657337"
             aria-label="Chat on WhatsApp"
             title="Chat on WhatsApp"
             className="fixed bottom-6 right-6 z-50"
             target="_blank"
             rel="noopener noreferrer"
           >
             <span className="absolute inset-0 flex h-14 w-14 animate-[ping_1.8s_ease-out_infinite] rounded-full bg-[#25D366]/60" />
             <span className="absolute inset-0 flex h-14 w-14 animate-[pulse_1.8s_ease-in-out_infinite] rounded-full bg-[#25D366]/40" />
             <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-black">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="22"
                 height="22"
                 fill="currentColor"
                 className="text-white"
                 viewBox="0 0 16 16"
               >
                 <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
               </svg>
             </span>
           </a>
         </SmoothScrollProvider>
      </body>
    </html>
  );
}
