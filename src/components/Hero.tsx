"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/content";
import { Code2, Server, MessageSquare, Box } from "lucide-react";
import { useEffect, useState } from "react";

const IsometricGrid = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none perspective-[2000px]">
    {/* 3D Rotated Plane */}
    <motion.div 
      className="absolute w-[200vw] h-[200vh] border-[var(--accent)]/20"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 85, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 85, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '4rem 4rem',
        transform: 'rotateX(65deg) rotateZ(45deg) translateY(-20%)',
        transformOrigin: 'center center'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backgroundPosition: ['0px 0px', '64px 64px'] }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      {/* Grid Particles traveling along lines */}
      <motion.div 
        className="absolute top-1/2 left-0 w-16 h-0.5 bg-gradient-to-r from-transparent to-[var(--accent)] blur-[1px]"
        animate={{ x: ['-100vw', '100vw'] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
      />
      <motion.div 
        className="absolute top-0 left-1/3 w-0.5 h-16 bg-gradient-to-b from-transparent to-blue-500 blur-[1px]"
        animate={{ y: ['-100vh', '100vh'] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      
      {/* Glowing Nodes on the grid */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[var(--accent)]/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[var(--accent)]/10 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: '1s' }} />
    </motion.div>
  </div>
);

const GlassPanel = ({ children, className = "", delay = 0, floatOffset = 15, duration = 6 }: { children: React.ReactNode, className?: string, delay?: number, floatOffset?: number, duration?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, type: "spring", bounce: 0.4 }}
    className={`absolute pointer-events-auto ${className}`}
  >
    <motion.div 
      animate={{ y: [0, -floatOffset, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay * 0.5 }}
      className="w-full h-full backdrop-blur-xl bg-slate-50/70 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:shadow-[0_0_40px_rgba(0,0,0,0.5)] rounded-2xl p-5 hover:border-[var(--accent)]/40 dark:hover:border-[var(--accent)]/50 transition-colors duration-500 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
      {children}
    </motion.div>
  </motion.div>
);

const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return <span>{displayText}<span className="animate-pulse">_</span></span>;
};

export function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[100vh] bg-[#fdfdfd] dark:bg-[#050505] text-slate-900 dark:text-slate-200 overflow-hidden flex items-center justify-center transition-colors duration-500">
      
      <IsometricGrid />

      {/* Main Content Content */}
      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto flex flex-col items-center pointer-events-none mt-[-10vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[var(--accent)] text-sm font-mono mb-8 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse shadow-[0_0_8px_var(--accent)]" />
            ENGINEERING COMPLEX SYSTEMS
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-white/60 drop-shadow-sm">
            Hi, I&apos;m {profile.name}.
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Crafting scalable systems, robust APIs, and interactive applications with a focus on code quality.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap gap-5 justify-center items-center"
          >
            <a href="#projects" className="bg-transparent border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300 shadow-[0_0_15px_rgba(255,85,0,0.15)] dark:shadow-[0_0_15px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.4)] dark:hover:shadow-[0_0_30px_rgba(255,85,0,0.6)]">
              VIEW PROJECTS
            </a>
            <a href={`mailto:${profile.email}`} className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 text-slate-900 dark:text-white px-8 py-3.5 rounded-full font-medium tracking-wide transition-all duration-300 backdrop-blur-sm">
              HIRE ME
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating 3D Panels */}
      <div className="absolute inset-0 z-10 pointer-events-none perspective-[1000px]">
        
        {/* Code Editor Panel */}
        <GlassPanel delay={0.2} duration={5} floatOffset={12} className="top-[15%] left-[5%] lg:left-[10%] w-[340px] rotate-[-5deg] rotateY-[10deg]">
          <div className="flex items-center gap-2 mb-4">
            <Code2 size={16} className="text-blue-500 dark:text-blue-400" />
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400">api_gateway.ts</span>
          </div>
          <pre className="font-mono text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
            <code>
              <span className="text-purple-600 dark:text-purple-400">import</span> {'{ Router }'} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">&apos;express&apos;</span>;<br/>
              <span className="text-blue-600 dark:text-blue-400">const</span> router = <span className="text-yellow-600 dark:text-yellow-200">Router</span>();<br/><br/>
              router.<span className="text-blue-500 dark:text-blue-300">post</span>(<span className="text-green-600 dark:text-green-400">&apos;/deploy&apos;</span>, <span className="text-purple-600 dark:text-purple-400">async</span> (req) =&gt; {'{'}<br/>
              &nbsp;&nbsp;<span className="text-blue-600 dark:text-blue-400">const</span> config = req.body;<br/>
              &nbsp;&nbsp;<span className="text-slate-400 dark:text-slate-500">{/* Initialize infrastructure */}</span><br/>
              &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">await</span> <span className="text-blue-500 dark:text-blue-300">buildPlatform</span>(config);<br/>
              &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">return</span> {'{ status: '} <span className="text-green-600 dark:text-green-400">&apos;success&apos;</span> {'}'};<br/>
              {'}'});
            </code>
          </pre>
        </GlassPanel>

        {/* Architecture Panel */}
        <GlassPanel delay={0.4} duration={7} floatOffset={18} className="bottom-[15%] right-[5%] lg:right-[10%] w-[400px] rotate-[5deg] rotateY-[-10deg]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Box size={16} className="text-blue-500" />
              <span className="font-mono text-xs text-slate-600 dark:text-slate-400">DOCKER CONTAINERS</span>
            </div>
            <motion.div 
              animate={{ opacity: [1, 0.3, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" 
            />
          </div>
          
          {/* Animated Diagram */}
          <div className="h-32 border border-black/10 dark:border-white/5 rounded-lg bg-slate-200/50 dark:bg-black/20 p-3 relative overflow-hidden flex items-center justify-center">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full opacity-30 dark:opacity-50" preserveAspectRatio="none">
              <motion.path 
                d="M50 64 L150 32 L250 64 L150 96 Z" 
                fill="none" 
                stroke="var(--accent)" 
                strokeWidth="2" 
                strokeDasharray="8 8"
                animate={{ strokeDashoffset: [0, -32] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            </svg>
            
            {/* Animated Data Packets */}
            <motion.div 
              className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#3b82f6]"
              animate={{ 
                x: [50, 150, 250], 
                y: [64, 32, 64],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Nodes */}
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute top-4 left-4 w-12 h-12 rounded bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 dark:border-blue-500/50 flex items-center justify-center backdrop-blur-sm"
            >
              <Box size={20} className="text-blue-600 dark:text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="absolute bottom-4 right-4 w-12 h-12 rounded bg-orange-500/10 dark:bg-orange-500/20 border border-orange-500/30 dark:border-orange-500/50 flex items-center justify-center backdrop-blur-sm"
            >
              <Box size={20} className="text-[var(--accent)] drop-shadow-[0_0_8px_rgba(255,85,0,0.5)]" />
            </motion.div>
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/30 dark:border-purple-500/50 flex items-center justify-center backdrop-blur-md"
            >
              <Server size={24} className="text-purple-600 dark:text-purple-400" />
            </motion.div>
          </div>
        </GlassPanel>

        {/* Chatbot Panel */}
        <GlassPanel delay={0.6} duration={5.5} floatOffset={10} className="top-[60%] left-[10%] lg:left-[25%] w-[300px] rotate-[-2deg] hidden md:block">
          <div className="flex items-center gap-2 mb-3 border-b border-black/5 dark:border-white/5 pb-2">
            <MessageSquare size={16} className="text-green-500 dark:text-green-400" />
            <span className="font-mono text-xs text-slate-600 dark:text-slate-400">System Logs</span>
          </div>
          <div className="space-y-3">
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 1.5 }}
               className="flex gap-2 items-start"
             >
               <div className="w-6 h-6 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0">AI</div>
               <p className="text-xs text-slate-700 dark:text-slate-300 mt-1"><TypewriterText text="Deployment status saved." delay={1.5} /></p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: -10 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 3 }}
               className="flex gap-2 items-start"
             >
               <div className="w-6 h-6 rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-[var(--accent)] flex items-center justify-center text-[10px] font-bold shrink-0">SYS</div>
               <p className="text-xs text-slate-700 dark:text-slate-300 mt-1"><TypewriterText text="Connecting to distributed cache. Latency: 12ms." delay={3} /></p>
             </motion.div>
          </div>
        </GlassPanel>

      </div>
    </section>
  );
}
