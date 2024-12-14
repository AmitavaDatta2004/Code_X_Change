import { NextResponse } from "next/server";
import { GeminiAPI } from "@/lib/api/gemini";
import { createConversionPrompt } from "@/lib/api/prompts";
import { APIError, ErrorCodes, handleAPIError } from "@/lib/api/errors";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    // Parse and validate request body
    let parsedBody;
    try {
      parsedBody = await req.json();
    } catch {
      throw new APIError(
        "Invalid JSON payload",
        400,
        ErrorCodes.INVALID_INPUT
      );
    }

    const { sourceCode, sourceLang, targetLang } = parsedBody;

    if (!sourceCode?.trim()) {
      throw new APIError(
        "Source code is required",
        400,
        ErrorCodes.INVALID_INPUT
      );
    }

    if (!sourceLang?.trim() || !targetLang?.trim()) {
      throw new APIError(
        "Source and target languages are required",
        400,
        ErrorCodes.INVALID_INPUT
      );
    }

    // Get model and generate prompt
    const model = GeminiAPI.getModel();
    const prompt = createConversionPrompt(sourceCode, sourceLang, targetLang);

    // Generate code
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Clean and validate response
    const convertedCode = text
      .replace(/```[\w-]*\n/g, '')
      .replace(/```\n?/g, '')
      .trim();

    if (!convertedCode) {
      throw new APIError(
        "Failed to generate code. Please try again with different input.",
        500,
        ErrorCodes.NO_CODE_GENERATED
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        convertedCode,
        message: "Code converted successfully",
      },
      { status: 200 }
    );

  } catch (error) {
    const { error: errorMessage, code, statusCode } = handleAPIError(error);
    return NextResponse.json(
      { error: errorMessage, code },
      { status: statusCode }
    );
  }
}
