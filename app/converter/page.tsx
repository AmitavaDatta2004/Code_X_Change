"use client";

import { useState } from "react";
import { languages } from "@/lib/languages";
import { toast } from "sonner";
import { CodePanel } from "@/components/converter/code-panel";
import { ActionButtons } from "@/components/converter/action-buttons";
import { CodeExplanation } from "@/components/code-explanation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";

export default function Converter() {
  const [sourceCode, setSourceCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [sourceLang, setSourceLang] = useState(languages[0]);
  const [targetLang, setTargetLang] = useState(languages[1]);
  const [isConverting, setIsConverting] = useState(false);
  const [explanation, setExplanation] = useState("");
  const [isExplaining, setIsExplaining] = useState(false);

  const handleConvert = async () => {
    if (!sourceCode.trim()) {
      toast.error("Please enter some code to convert");
      return;
    }

    if (sourceLang.value === targetLang.value) {
      toast.error("Source and target languages must be different");
      return;
    }

    setIsConverting(true);
    setExplanation("");
    
    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sourceCode,
          sourceLang: sourceLang.name,
          targetLang: targetLang.name,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to convert code");
      }
      
      setConvertedCode(data.convertedCode);
      toast.success(data.message || "Code converted successfully!");

      // Get explanation for the converted code
      setIsExplaining(true);
      const explanationResponse = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: data.convertedCode,
          language: targetLang.name,
        }),
      });

      const explanationData = await explanationResponse.json();
      if (!explanationResponse.ok) throw new Error(explanationData.error);
      
      setExplanation(explanationData.explanation);
    } catch (error: any) {
      toast.error(error.message);
      setConvertedCode("");
      setExplanation("");
    } finally {
      setIsConverting(false);
      setIsExplaining(false);
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceCode(convertedCode);
    setConvertedCode("");
    setExplanation("");
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 pt-16">
        <div className="container mx-auto px-4 py-12 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold text-white">Code_X_Change</h1>
            <p className="text-white/90">
              Transform your code between different programming languages instantly
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <CodePanel
              language={sourceLang}
              onLanguageChange={setSourceLang}
              code={sourceCode}
              onCodeChange={setSourceCode}
              showSwap={true}
              onSwap={handleSwapLanguages}
              label="Source Language"
              placeholder="Enter your code here..."
            />

            <CodePanel
              language={targetLang}
              onLanguageChange={setTargetLang}
              code={convertedCode}
              onCodeChange={setConvertedCode}
              readOnly={true}
              label="Target Language"
              placeholder="Converted code will appear here..."
            />
          </div>

          <ActionButtons
            onConvert={handleConvert}
            isConverting={isConverting}
            convertedCode={convertedCode}
            targetLanguage={targetLang.value}
          />

          <CodeExplanation
            explanation={explanation}
            isLoading={isExplaining}
          />
        </div>
      </main>
    </>
  );
}