export function createConversionPrompt(sourceCode: string, sourceLang: string, targetLang: string): string {
  return `As an expert programmer, convert this ${sourceLang} code to ${targetLang}.
Follow these rules strictly:
1. Only output the converted code without any explanations or markdown
2. Maintain identical functionality and logic
3. Follow ${targetLang}'s best practices and conventions
4. Preserve all comments
5. Keep variable names consistent where possible
6. Include proper error handling
7. Ensure the code is complete and properly formatted

Source code to convert:

${sourceCode}`;
}

export function createExplanationPrompt(code: string, language: string): string {
  return `As an expert software developer, provide a detailed line-by-line explanation of this ${language} code.

Guidelines:
1. Explain each line's functionality in plain, simple English
2. Focus on what each line does, not just what it is
3. Avoid technical jargon unless necessary
4. Include the purpose of each function, variable, or block
5. Explain any important logic or algorithms used
6. Highlight any notable patterns or best practices
7. Point out any potential improvements or optimizations

Format each explanation as a simple line of text, focusing on clarity and readability.
Do not use any markdown formatting.
You can use line numbering , emojis , etc. but don't use any type of markdonw formatting.
Each line should be a complete, self-contained explanation.

Code to analyze:

${code}`;
}