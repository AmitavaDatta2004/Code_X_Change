import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function downloadCode(code: string, language: string) {
  if (!code) return;

  const extensions: Record<string, string> = {
    python: "py",
    javascript: "js",
    typescript: "ts",
    java: "java",
    cpp: "cpp",
    csharp: "cs",
    php: "php",
    ruby: "rb",
    go: "go",
    swift: "swift",
    kotlin: "kt",
    rust: "rs",
  };

  const blob = new Blob([code], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `converted.${extensions[language] || "txt"}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}