"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Amitava Datta",
    role: "Full Stack Developer",
    image: "./collaborators/AmitavaDatta.png",
    github: "#",
    linkedin: "#",
    email: "mailto:dattaarup2004@gmail.com",
  },
  {
    name: "Pranay De",
    role: "Full Stack Developer",
    image: "./collaborators/PranayDe.jpg",
    github: "#",
    linkedin: "#",
    email: "mailto:pranayde201@gmail.com",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">Meet the Team</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The brilliant minds behind CodeConverter, working tirelessly to
            simplify your coding experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 dark:shadow-gray-700">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-4 border-gray-300 dark:border-gray-600 hover:scale-110 transform transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href={member.github}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <Github className="h-6 w-6 hover:scale-125 transform transition-transform duration-300" />
                  </Link>
                  <Link
                    href={member.linkedin}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <Linkedin className="h-6 w-6 hover:rotate-12 transform transition-transform duration-300" />
                  </Link>
                  <Link
                    href={member.email}
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-300"
                  >
                    <Mail className="h-6 w-6 hover:translate-y-1 transform transition-transform duration-300" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
