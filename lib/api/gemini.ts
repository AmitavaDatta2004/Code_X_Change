import { GoogleGenerativeAI } from "@google/generative-ai";

export class GeminiAPI {
  private static instance: GoogleGenerativeAI;

  static initialize(): GoogleGenerativeAI {
    if (!this.instance) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("GEMINI_API_KEY is not configured");
      }
      this.instance = new GoogleGenerativeAI(apiKey);
    }
    return this.instance;
  }

  static getModel() {
    const genAI = this.initialize();
    return genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 8192,
      },
    });
  }
}