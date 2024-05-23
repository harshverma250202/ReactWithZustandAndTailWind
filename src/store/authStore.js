import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialState = {
    token: localStorage.getItem("token") || null,
    user: null,
};

export const useAuthStore = create(
    persist(
        (set) => ({
            ...initialState,
            login: (token, user) => {
                set({ token, user });
                localStorage.setItem("token", token);
            },
            resetAuth: () => {
                set(initialState);
                localStorage.removeItem("token");
            },
            updateAuth: (data) => {
                set((state) => ({ ...state, ...data }));
            },

        }),
        {
            name: "auth",
        }
    )
);
