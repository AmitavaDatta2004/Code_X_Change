import { NextResponse } from "next/server";
import { GeminiAPI } from "@/lib/api/gemini";
import { createExplanationPrompt } from "@/lib/api/prompts";
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

    const { code, language } = parsedBody;

    if (!code?.trim() || !language?.trim()) {
      throw new APIError(
        "Code and language are required",
        400,
        ErrorCodes.INVALID_INPUT
      );
    }

    // Get model and generate prompt
    const model = GeminiAPI.getModel();
    const prompt = createExplanationPrompt(code, language);

    // Generate explanation
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const explanation = await response.text();

    if (!explanation) {
      throw new APIError(
        "Failed to generate explanation. Please try again.",
        500,
        ErrorCodes.NO_CODE_GENERATED
      );
    }

    // Return successful response
    return NextResponse.json(
      {
        explanation,
        message: "Code explanation generated successfully",
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