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
    <section id="team" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind CodeConverter, working to make code
            conversion seamless and efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <Link
                    href={member.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.linkedin}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={member.email}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5" />
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