export interface ValidationMessage extends Error {
    message: string;
    name: string;
    type?: string;
    params?: { [index: string]: unknown };
}
