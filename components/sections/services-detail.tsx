"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Smartphone, Brain, Layers, Palette, Server, Globe, 
  Check, Clock, DollarSign, Sparkles, Zap, Rocket, Feather, 
  ShoppingCart, Layout, Database, Cloud, Aperture, Cpu, 
  Shield, GitBranch, Lightbulb, TrendingUp, Users, Package, 
  Brush, HardDrive, ScrollText, Timer, SquareStack, Briefcase, 
  Network, Factory, FileText, BarChart2, Mail, Star, MessageSquare
} from "lucide-react";
import { Chain } from "@/components/ui/icons";
import { servicesDetails } from "@/lib/data"; // Assume this data is available
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

const iconMap = {
  Code,
  Smartphone,
  Brain,
  Layers,
  Palette,
  Server,
  Globe,
  Check,
  Clock,
  DollarSign,
  Sparkles,
  Zap,
  Rocket,
  Feather,
  ShoppingCart,
  Layout,
  Database,
  Cloud,
  Aperture,
  Cpu,
  Shield,
  GitBranch,
  Lightbulb,
  TrendingUp,
  Users,
  Package,
  Brush,
  HardDrive,
  ScrollText,
  Timer,
  SquareStack,
  Briefcase,
  Network,
  Factory,
  FileText,
  BarChart2,
  Mail, Star, MessageSquare, Chain
}; 

export function ServicesDetailSection() {
  const [activeTab, setActiveTab] = useState(servicesDetails[0].title);

  return (
    <section id="services-detail" className="bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          — WHAT&apos;S INCLUDED
        </motion.p>
        <motion.h2
          className="mb-12 text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Every Service, Fully Explained
        </motion.h2>

        {/* Tabs */}
        <motion.div
          className="hide-scrollbar flex gap-4 overflow-x-auto border-b border-white/10 pl-80 pb-4 md:justify-center lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {servicesDetails.map((service) => (
            <button
              key={service.title}
              onClick={() => setActiveTab(service.title)}
              className={cn(
                "relative whitespace-nowrap px-3 py-2 text-lg font-medium transition-colors",
                activeTab === service.title ? "text-white" : "text-muted hover:text-white",
              )}
              data-cursor="hover"
            >
              {service.title}
              {activeTab === service.title && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {servicesDetails.map(
            (service) =>
              activeTab === service.title && (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-12 grid gap-12 lg:grid-cols-[3fr_2fr]"
                >
                  {/* Left Side */}
                  <div>
                    <div className="mb-4 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                      {service.mainIcon && (
                        <span className="text-4xl">
                          {service.mainIcon && React.createElement(iconMap[service.mainIcon as keyof typeof iconMap], { size: 48 })}
                        </span>
                      )}
                    </div>
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                    <p className="mt-2 text-lg italic text-muted">{service.tagline}</p>
                    <p className="mt-6 leading-relaxed text-white/80">{service.description}</p>

                    <p className="section-label mt-8">What you get</p>
                    <ul className="mt-4 space-y-3">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-white/80">
                          <Check size={18} className="shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="section-label mt-8">Perfect for</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.useCases.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side */}
                  <div className="rounded-2xl border border-white/5 bg-surface-2 p-6">
                    <p className="mb-4 text-sm uppercase tracking-widest text-muted">Tech Stack</p>
                    <div className="grid grid-cols-2 gap-3">
                      {service.techStack.map((tech) => {
                      const TechIcon = tech.icon ? iconMap[tech.icon as keyof typeof iconMap] : null;
                      return (
                          <div
                            key={tech.name}
                            className="flex items-center gap-2 rounded-lg bg-surface p-3 text-sm text-white"
                          >
                            {TechIcon && <TechIcon size={20} className="text-accent" />}
                            <span>{tech.name}</span>
                          </div>
                        );
                      })}
                    </div>



                    <div className="gradient-line my-8" />

                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-3">
                        <Clock size={20} className="text-accent" />
                        <span>Delivery Time</span>
                      </div>
                      <span className="font-medium">{service.deliveryTime}</span>
                    </div>

                    <div className="gradient-line my-8" />

                    <div className="flex items-center justify-between text-white/80">
                      <div className="flex items-center gap-3">
                        <DollarSign size={20} className="text-accent" />
                        <span>Typical Budget</span>
                      </div>
                      <span className="font-medium">{service.budget}</span>
                    </div>

                    <div className="mt-10">
                      <MagneticButton className="w-full">
                        <button
                          data-cursor="hover"
                          className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
                        >
                          Get a Quote →
                        </button>
                      </MagneticButton>
                    </div>
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
