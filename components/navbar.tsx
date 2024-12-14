"use client";

import { Button } from "@/components/ui/button";
import { Code2, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [text] = useTypewriter({
    words: ['Transform', 'Convert', 'Translate'],
    loop: true,
    delaySpeed: 2000,
  });

  const menuItems = [
    { href: "#features", label: "Features" },
    { href: "/converter", label: "Converter" },
    { href: "#team", label: "Team" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Code2 className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Code<span className="text-primary">Converter</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <span className="text-primary font-semibold">
              {text}<Cursor cursorStyle="_" />
            </span>
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/converter">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Get Started
              </Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/converter">
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}