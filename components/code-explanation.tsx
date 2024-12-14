"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Loader2, BookOpen } from "lucide-react";

interface CodeExplanationProps {
  explanation: string;
  isLoading: boolean;
}

export function CodeExplanation({ explanation, isLoading }: CodeExplanationProps) {
  if (!explanation && !isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-8 mt-8 backdrop-blur-sm bg-white/10 dark:bg-gray-900/50 border-2 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-7 w-7 text-purple-500" />
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Code Analysis
            </h3>
            <p className="text-sm text-muted-foreground">
              Line by line explanation of the code
            </p>
          </div>
        </div>
        
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
            <span className="ml-3 text-muted-foreground">Analyzing code...</span>
          </div>
        ) : (
          <div className="prose prose-purple dark:prose-invert max-w-none">
            <div className="rounded-lg bg-card p-6 shadow-lg border border-border">
              <div className="space-y-4">
                {explanation.split('\n').map((line, index) => (
                  <div 
                    key={index} 
                    className="py-2 px-4 rounded-md hover:bg-muted/50 transition-colors duration-200"
                  >
                    <p className="text-base leading-relaxed text-foreground/90">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
}