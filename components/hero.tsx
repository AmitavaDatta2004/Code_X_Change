"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2, Sparkles, Terminal, Zap } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

interface AnimatedDot {
  id: number;
  left: number;
  top: number;
}

export function Hero() {
  const [dots, setDots] = useState<AnimatedDot[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const newDots = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
    }));
    setDots(newDots);
  }, []);

  const [text] = useTypewriter({
    words: [
      'Transform Your Code',
      'Python → JavaScript',
      'Java → TypeScript',
      'C++ → Python',
      'Any Language → Any Language'
    ],
    loop: true,
    delaySpeed: 2000,
    deleteSpeed: 50,
    typeSpeed: 100,
  });

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-pattern dark:bg-grid-white/5" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute h-2 w-2 rounded-full bg-purple-500/30 dark:bg-purple-400/30"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 2, 1],
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: dot.id * 0.2,
            }}
            style={{
              left: `${dot.left}%`,
              top: `${dot.top}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 py-32 relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8 max-w-3xl mx-auto"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="relative inline-block"
          >
            <Sparkles className="h-20 w-20 mx-auto text-purple-500 dark:text-purple-400" />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.6)",
                  "0 0 20px rgba(168, 85, 247, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <span className="inline-block">
              {text}
              <Cursor cursorStyle="_" />
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-muted-foreground"
          >
            Convert code between multiple programming languages instantly with our
            advanced AI-powered converter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/converter">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Converting
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}