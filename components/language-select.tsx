"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { languages } from "@/lib/languages";

interface LanguageSelectProps {
  value: typeof languages[0];
  onChange: (value: typeof languages[0]) => void;
  label: string;
}

export function LanguageSelect({ value, onChange, label }: LanguageSelectProps) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <Select
        value={value.value}
        onValueChange={(newValue) => {
          const language = languages.find((lang) => lang.value === newValue);
          if (language) onChange(language);
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((language) => (
            <SelectItem key={language.value} value={language.value}>
              {language.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}