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
    <section id={id} className={`relative py-24 min-h-[50vh] scroll-mt-16 overflow-hidden ${className}`}>
      {/* Background Animated Lines (High Visibility) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-40">
        {/* Track Lines */}
        <div className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-40" />
        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20" />
        <div className="absolute left-[85%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent opacity-40" />
        
        {/* Energy Beams */}
        <motion.div 
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-[15%] top-0 w-[4px] h-[20vh] bg-blue-500 rounded-full shadow-[0_0_30px_rgba(59,130,246,1),0_0_10px_white]"
        />
        <motion.div 
          animate={{ y: ["120vh", "-20vh"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute left-[50%] top-0 w-[2px] h-[15vh] bg-[var(--accent)] rounded-full shadow-[0_0_30px_var(--accent),0_0_10px_white]"
        />
        <motion.div 
          animate={{ y: ["-20vh", "120vh"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute left-[85%] top-0 w-[4px] h-[25vh] bg-[var(--accent)] rounded-full shadow-[0_0_30px_var(--accent),0_0_10px_white]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        {title && (
          <div className="mb-12">
            <p className="text-sm font-mono text-[var(--foreground)]/50 mb-2">
              <span className="text-green-600 dark:text-green-500">// Initialize {id} module</span>
            </p>
            <h2 className="text-3xl md:text-4xl font-bold font-mono flex items-center flex-wrap">
              <span className="text-purple-600 dark:text-purple-400 mr-3">export</span>
              <span className="text-blue-600 dark:text-blue-400 mr-2">const</span>
              {title} = <span className="text-yellow-600 dark:text-yellow-200 mx-2">() =&gt;</span> {'{'}
            </h2>
          </div>
        )}
        {children}
        {title && (
          <h2 className="text-3xl md:text-4xl font-bold font-mono mt-12">
            {'}'}
          </h2>
        )}
      </motion.div>
    </section>
  );
}
