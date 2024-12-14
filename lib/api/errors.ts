export class APIError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public code: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export const ErrorCodes = {
  MISSING_API_KEY: 'MISSING_API_KEY',
  INVALID_INPUT: 'INVALID_INPUT',
  NO_CODE_GENERATED: 'NO_CODE_GENERATED',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  CONVERSION_FAILED: 'CONVERSION_FAILED',
} as const;

export function handleAPIError(error: unknown) {
  console.error('API Error:', error);

  if (error instanceof APIError) {
    return { error: error.message, code: error.code, statusCode: error.statusCode };
  }

  const err = error as Error;
  if (err.message?.includes('quota') || err.message?.includes('rate')) {
    return {
      error: 'Service is temporarily unavailable. Please try again later.',
      code: ErrorCodes.RATE_LIMIT_EXCEEDED,
      statusCode: 429,
    };
  }

  return {
    error: 'An unexpected error occurred. Please try again.',
    code: ErrorCodes.CONVERSION_FAILED,
    statusCode: 500,
  };
}