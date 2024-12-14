"use client";

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/theme-github_dark";
import "ace-builds/src-noconflict/theme-github";
import { useTheme } from "next-themes";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
  language: string;
  placeholder?: string;
  readOnly?: boolean;
}

const languageMap: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  java: "java",
  c: "c_cpp",
  cpp: "c_cpp",
  csharp: "csharp",
  php: "php",
  ruby: "ruby",
  go: "golang",
  swift: "swift",
  rust: "rust",
};

export function CodeEditor({
  value,
  onChange,
  language,
  placeholder,
  readOnly,
}: CodeEditorProps) {
  const { theme } = useTheme();

  return (
    <div className="relative rounded-lg overflow-hidden border bg-background">
      <div className="absolute top-2 right-2 text-xs text-muted-foreground bg-background/50 px-2 py-1 rounded-md backdrop-blur-sm z-10">
        {language}
      </div>
      <AceEditor
        mode={languageMap[language] || "text"}
        theme={theme === "dark" ? "github_dark" : "github"}
        value={value}
        onChange={onChange}
        name={`editor-${language}`}
        editorProps={{ $blockScrolling: true }}
        placeholder={placeholder}
        readOnly={readOnly}
        width="100%"
        height="400px"
        fontSize={14}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
          useWorker: false,
        }}
        className="font-mono"
      />
    </div>
  );
}