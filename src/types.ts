/**
 * Error Type
 */
export interface Error {
    raw?: any;
    type?: "response" | "request";
    identifier?: string;
    body?: unknown;
    status?: number;
    message?: string;
}

/**
 * check if object is error
 *
 * @param obj object
 * @returns boolean
 */
export function isError(obj: any): obj is Error {
    return (
        "raw" in obj &&
        "type" in obj &&
        "identifier" in obj &&
        "body" in obj &&
        "status" in obj &&
        "message" in obj
    );
}

/**
 * Try to parse error object as Error interface
 *
 * @param obj error object
 * @returns Error interface or null
 */
export function ParseAsError(obj: any): Error | null {
    if (isError(obj)) return obj as Error;
    return null;
}

/**
 * Error handler function signature
 *
 * Return true to apply parser and continue
 * Return false to apply parser and stop pipeline
 * Return undefined to skip parser
 */
export type ErrorHandler = (err: Error) => true | false | undefined;

/**
 * Validation error response signature
 */
export interface ValidationResponse {
    [field: string]: { [error: string]: string };
}

/**
 * RateLimiter error response signature
 */
export interface RateLimiterResponse {
    [ttl: string]: number;
}
