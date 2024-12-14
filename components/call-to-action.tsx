"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-white">Ready to Convert Your Code?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Experience the power of AI-driven code conversion with our advanced tools
          </p>
          <Link href="/converter">
            <Button size="lg" variant="secondary" className="mt-4">
              Try Code Converter
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}