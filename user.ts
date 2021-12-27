export interface UserEmail {
    userName?: string;
    email?: string;
}

export interface DbUser extends UserEmail {
    _id: string;
    _password?: string; // For local provider
    displayName?: string;
    validated?: boolean;
    blocked?: boolean;
    role?: string; // Default: user
    validationToken?: string;
    validationTime?: number;
    provider?: string;
    failAttempts?: number;
    lastLogin?: number;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    lastIP?: string;
}

export interface User extends DbUser {
    token?: string; // For external providers
    photo?: string;
}

export interface LoginCredential {
    username: string;
    password: string;
}

export interface ResetPassword {
    email: string;
}

export interface SignupInfos {
    username: string;
    email: string;
    password: string;
    password2: string;
}
