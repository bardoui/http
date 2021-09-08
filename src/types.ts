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
