"use client";

import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Code2,
  FileCode,
  Languages,
  Download,
  CheckCircle,
  Laptop,
  BookOpen,
  Sparkles,
  Zap,
  Moon,
} from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Languages,
    title: "Language-to-Language Conversion",
    description:
      "Convert code between multiple programming languages with high accuracy using AI.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: FileCode,
    title: "Code Formatting",
    description:
      "Automatically format code according to language-specific style guides.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Syntax Highlighting",
    description: "Advanced syntax highlighting for all supported languages including C/C++.",
    gradient: "from-pink-500 to-red-500",
  },
  {
    icon: BookOpen,
    title: "AI-Powered Code Explanation",
    description: "Get detailed line-by-line explanations of your code using advanced AI.",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: Moon,
    title: "Dark/Light Theme",
    description: "Switch between dark and light themes for comfortable coding in any environment.",
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Sparkles,
    title: "Beautiful UI/UX",
    description: "Enjoy a modern, responsive interface with smooth animations and transitions.",
    gradient: "from-yellow-500 to-green-500",
  },
  {
    icon: CheckCircle,
    title: "Error Checking",
    description: "Validate input code for syntax errors before conversion.",
    gradient: "from-green-500 to-teal-500",
  },
  {
    icon: Laptop,
    title: "Cross-Platform Support",
    description: "Works seamlessly across all major operating systems and browsers.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Download,
    title: "Downloadable Output",
    description: "Download converted code files with proper language extensions.",
    gradient: "from-cyan-500 to-blue-500",
  },
];

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  return (
    <section
      id="features"
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900"
    >
      <motion.div style={{ y }} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/80 max-w-2xl mx-auto"
          >
            Transform your code with our comprehensive set of features designed to
            make code conversion simple and efficient.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-white/10 backdrop-blur-lg hover:shadow-lg transition-all duration-300 border-0 group">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${feature.gradient} transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 mt-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}