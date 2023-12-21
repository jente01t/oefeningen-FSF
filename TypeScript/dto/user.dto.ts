export interface user {
    id: number;
    username: string;
    email: string;
    password: string;
    registeredAt: Date;
}

export interface profile {
    userId: number;
    firstName: string;
    lastName: string;
    avatarURL: string;
    bio: string;
}