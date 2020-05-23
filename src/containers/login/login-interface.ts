export interface Login {
    email: string;
    password: string;
}

export interface User extends Login {
    id: number;
}
