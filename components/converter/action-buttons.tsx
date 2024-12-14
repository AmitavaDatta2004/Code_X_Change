"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Download } from "lucide-react";
import { downloadCode } from "@/lib/utils";

interface ActionButtonsProps {
  onConvert: () => void;
  isConverting: boolean;
  convertedCode: string;
  targetLanguage: string;
}

export function ActionButtons({
  onConvert,
  isConverting,
  convertedCode,
  targetLanguage,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-center gap-4">
      <Button
        size="lg"
        onClick={onConvert}
        disabled={isConverting}
        className="w-40 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
      >
        <ArrowRightLeft className="mr-2 h-4 w-4" />
        {isConverting ? "Converting..." : "Convert"}
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={() => downloadCode(convertedCode, targetLanguage)}
        disabled={!convertedCode}
        className="w-40"
      >
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
    </div>
  );
}