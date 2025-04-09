// src/store/userStore.ts
import { create } from "zustand";

type User = {
    id: string;
    username: string;
    savedRecipes: string[];
};

type UserStore = {
    user: User | null;
    users: User[];
    login: (username: string) => boolean;
    signup: (username: string) => boolean;
    logout: () => void;
    saveRecipe: (recipeId: string) => void;
    unsaveRecipe: (recipeId: string) => void;
};

const getLocalUsers = (): User[] =>
    JSON.parse(localStorage.getItem("users") || "[]");

const setLocalUsers = (users: User[]) =>
    localStorage.setItem("users", JSON.stringify(users));

const getCurrentUser = (): User | null =>
    JSON.parse(localStorage.getItem("currentUser") || "null");

export const useUserStore = create<UserStore>((set, get) => ({
    user: getCurrentUser(),
    users: getLocalUsers(),

    login: (username) => {
        const user = get().users.find((u) => u.username === username);
        if (!user) return false;
        localStorage.setItem("currentUser", JSON.stringify(user));
        set({ user });
        return true;
    },

    signup: (username) => {
        const users = get().users;
        if (users.find((u) => u.username === username)) return false;

        const newUser = { id: crypto.randomUUID(), username, savedRecipes: [] };
        const updatedUsers = [...users, newUser];
        setLocalUsers(updatedUsers);
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        set({ users: updatedUsers, user: newUser });
        return true;
    },

    logout: () => {
        localStorage.removeItem("currentUser");
        set({ user: null });
    },

    saveRecipe: (id) => {
        const user = get().user;
        if (!user) return;
        if (!user.savedRecipes.includes(id)) {
            const updated = { ...user, savedRecipes: [...user.savedRecipes, id] };
            set({ user: updated });
            localStorage.setItem("currentUser", JSON.stringify(updated));
        }
    },

    unsaveRecipe: (id) => {
        const user = get().user;
        if (!user) return;
        const updated = {
            ...user,
            savedRecipes: user.savedRecipes.filter((r) => r !== id),
        };
        set({ user: updated });
        localStorage.setItem("currentUser", JSON.stringify(updated));
    },
}));
