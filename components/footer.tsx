"use client";

import { Code2, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Code2 className="h-6 w-6 text-white" />
              <span className="font-bold text-2xl">Code_X_Change</span>
            </div>
            <p className="text-gray-200">
              Transform your code between programming languages with ease.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-semibold text-lg mb-4 border-b-2 border-white pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#features"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/converter"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Converter
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-200 hover:text-white transition-colors duration-300"
                >
                  Team
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-semibold text-lg mb-4 border-b-2 border-white pb-2">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-gray-200 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-white text-center text-gray-200"
        >
          <p>
            &copy; {new Date().getFullYear()} Code_X_Change. All rights reserved.{' '}
            <motion.span
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="inline-block"
            >
              ❤️
            </motion.span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
