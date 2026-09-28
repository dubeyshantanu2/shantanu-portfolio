"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-24 min-h-[50vh] scroll-mt-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6"
      >
        {title && (
          <h2 className="text-3xl font-bold font-mono mb-12 flex items-center">
            <span className="text-accent mr-2">#</span>
            {title}
          </h2>
        )}
        {children}
      </motion.div>
    </section>
  );
}
