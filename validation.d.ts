export interface IValidationMessage extends Error {
    message: string;
    name: string;
    type?: string;
    params?: {
        [index: string]: any;
    };
}
