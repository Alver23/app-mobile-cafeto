export interface Login {
    email: string;
    password: string;
}

export interface User extends Login {
    id: number;
}


export interface State {
    email: {
        value: string;
        error: string;
    };
    password: {
        value: string;
        error: string;
    };
    genericError: string;
}

export interface Props {
    loading: string;
    error: string;
    login: (payload) => void;
}
