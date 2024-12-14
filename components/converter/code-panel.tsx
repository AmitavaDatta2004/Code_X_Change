"use client";

import { CodeEditor } from "@/components/code-editor";
import { LanguageSelect } from "@/components/language-select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";
import { motion } from "framer-motion";
import { type Language } from "@/lib/languages";
import { CopyButton } from "@/components/ui/copy-button";

interface CodePanelProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
  code: string;
  onCodeChange: (code: string) => void;
  showSwap?: boolean;
  onSwap?: () => void;
  readOnly?: boolean;
  label: string;
  placeholder?: string;
}

export function CodePanel({
  language,
  onLanguageChange,
  code,
  onCodeChange,
  showSwap = false,
  onSwap,
  readOnly = false,
  label,
  placeholder,
}: CodePanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 space-y-4 backdrop-blur-sm bg-white/10 dark:bg-gray-900/50 border-2 hover:border-purple-500 transition-all duration-300">
        <div className="flex items-center justify-between">
          <LanguageSelect
            value={language}
            onChange={onLanguageChange}
            label={label}
          />
          <div className="flex items-center gap-2 mt-6">
            {code && <CopyButton value={code} />}
            {showSwap && onSwap && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onSwap}
                className="hover:bg-purple-500/20 transition-colors"
                title="Swap languages"
              >
                <ArrowRightLeft className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
        <CodeEditor
          value={code}
          onChange={onCodeChange}
          language={language.value}
          placeholder={placeholder}
          readOnly={readOnly}
        />
      </Card>
    </motion.div>
  );
}