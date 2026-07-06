"use client";

import { motion } from "framer-motion";
import {
  Code, Smartphone, Brain, Layers, Palette, Server, Globe,
  Check, Clock, DollarSign, Sparkles, Zap, Rocket, Feather,
  ShoppingCart, Layout, Database, Cloud, Aperture, Cpu,
  Shield, GitBranch, Lightbulb, TrendingUp, Users, Package,
  Brush, HardDrive, ScrollText, Timer, SquareStack, Briefcase,
  Network, Factory, FileText, BarChart2, MessageSquare, Mail, Star
} from "lucide-react";
import { techStackCategories } from "@/lib/data";
import { Chain } from "@/components/ui/icons";

const iconMap = {
  Code, Smartphone, Brain, Layers, Palette, Server, Globe,
  Check, Clock, DollarSign, Sparkles, Zap, Rocket, Feather,
  ShoppingCart, Layout, Database, Cloud, Aperture, Cpu,
  Shield, GitBranch, Lightbulb, TrendingUp, Users, Package,
  Brush, HardDrive, ScrollText, Timer, SquareStack, Briefcase,
  Network, Factory, FileText, BarChart2, MessageSquare, Mail, Star, Chain
};

export function TechStackShowcaseSection() {
  return (
    <section id="tech-stack" className="bg-black px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.p
          className="section-label mb-4"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          — OUR ARSENAL
        </motion.p>
        <motion.h2
          className="mb-16 text-3xl font-bold lg:text-5xl"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies We Master
        </motion.h2>

        <div className="space-y-12">
          {techStackCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
            >
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                {category.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech, techIndex) => {
                  const TechIcon = tech.icon ? iconMap[tech.icon as keyof typeof iconMap] : null;
                  return (
                    <motion.div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-xl border border-white/5 bg-surface px-4 py-3 text-sm text-white transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-accent"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.2 }}
                      data-cursor="hover"
                      style={{ willChange: "transform" }}
                    >
                      {TechIcon && <TechIcon size={20} className="text-accent" />}
                      <span>{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}