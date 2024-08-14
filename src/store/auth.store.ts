import { create } from "zustand";

interface AuthState {
    status: 'authorized' | 'unauthorized' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    }

    login: (email: string, password: string) => void;
    logout: () => void

}

export const useAuthStore = create<AuthState>()((set) => ({

    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
        set({
            status: 'authorized',
            token: 'A1234',
            user: {
                name: 'leamsi-alvarado',
                email: email
            }
        });
    },

    logout: () => {
        set({
            status: 'unauthorized',
            token: undefined,
            user: undefined
        })
    }


}))