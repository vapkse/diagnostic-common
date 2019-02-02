export interface IUserEmail {
    userName?: string;
    email?: string;
}

export interface IDbUser extends IUserEmail {
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
    lastIP?: string;
}

export interface IUser extends IDbUser {
    token?: string; // For external providers
    photo?: string;
}

export interface ILoginCredential {
    username: string;
    password: string;
}

export interface IResetPassword {
    email: string;
}

export interface ISignupInfos {
    username: string;
    email: string;
    password: string;
    password2: string;
}
