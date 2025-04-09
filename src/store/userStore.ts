import { create } from "zustand";

type User = {
    id: string;
    username: string;
    password: string;
    savedRecipes: string[];
};

type UserStore = {
    user: Omit<User, "password"> | null;
    users: User[];
    login: (username: string, password: string) => boolean;
    signup: (username: string, password: string) => boolean;
    logout: () => void;
    saveRecipe: (recipeId: string) => void;
    unsaveRecipe: (recipeId: string) => void;
};

const getLocalUsers = (): User[] =>
    JSON.parse(localStorage.getItem("users") || "[]");

const setLocalUsers = (users: User[]) =>
    localStorage.setItem("users", JSON.stringify(users));

const getCurrentUser = (): Omit<User, "password"> | null =>
    JSON.parse(localStorage.getItem("currentUser") || "null");

export const useUserStore = create<UserStore>((set, get) => ({
    user: getCurrentUser(),
    users: getLocalUsers(),

    login: (username, password) => {
        const user = get().users.find(
            (u) => u.username === username && u.password === password
        );
        if (!user) return false;
        const { password: _pw, ...safeUser } = user;
        localStorage.setItem("currentUser", JSON.stringify(safeUser));
        set({ user: safeUser });
        return true;
    },

    signup: (username, password) => {
        const users = get().users;
        if (users.find((u) => u.username === username)) return false;

        const newUser: User = {
            id: crypto.randomUUID(),
            username,
            password,
            savedRecipes: [],
        };
        const updatedUsers = [...users, newUser];
        setLocalUsers(updatedUsers);

        const { password: _pw, ...safeUser } = newUser;
        localStorage.setItem("currentUser", JSON.stringify(safeUser));
        set({ users: updatedUsers, user: safeUser });
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
