import { create } from "zustand";

type User = {
    id: string;
    username: string;
    password: string;
    savedRecipes: string[];
};

type UserStore = {
    loadUser: any;
    user: Omit<User, "password"> | null;
    users: User[];
    loading: boolean;
    error: string | null;
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
    loading: false,
    error: null,

    login: (username, password) => {
        set({ loading: true, error: null });
        try {
            const user = get().users.find(
                (u) => u.username === username && u.password === password
            );
            if (!user) {
                set({ loading: false, error: "Invalid username or password" });
                return false;
            }
            const { password: _pw, ...safeUser } = user;
            localStorage.setItem("currentUser", JSON.stringify(safeUser));
            set({ user: safeUser, loading: false });
            return true;
        } catch (err) {
            set({ error: "Login failed", loading: false });
            return false;
        }
    },

    signup: (username, password) => {
        set({ loading: true, error: null });
        try {
            const users = get().users;
            if (users.find((u) => u.username === username)) {
                set({ loading: false, error: "Username already exists" });
                return false;
            }

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
            set({ users: updatedUsers, user: safeUser, loading: false });
            return true;
        } catch (err) {
            set({ error: "Signup failed", loading: false });
            return false;
        }
    },

    logout: () => {
        try {
            localStorage.removeItem("currentUser");
            set({ user: null, error: null });
        } catch (err) {
            set({ error: "Logout failed" });
        }
    },

    loadUser: () => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            set({ user: JSON.parse(storedUser) });
        }
    },
    saveRecipe: (id) => {
        try {
            const user = get().user;
            if (!user) return;
            if (!user.savedRecipes.includes(id)) {
                const updated = { ...user, savedRecipes: [...user.savedRecipes, id] };
                set({ user: updated });
                localStorage.setItem("currentUser", JSON.stringify(updated));

                // Also update the full user in users list
                const users = get().users.map((u) =>
                    u.id === updated.id ? { ...u, savedRecipes: updated.savedRecipes } : u
                );
                setLocalUsers(users);
                set({ users });
            }
        } catch (err) {
            set({ error: "Failed to save recipe" });
        }
    },

    unsaveRecipe: (id) => {
        try {
            const user = get().user;
            if (!user) return;
            const updated = {
                ...user,
                savedRecipes: user.savedRecipes.filter((r) => r !== id),
            };
            set({ user: updated });
            localStorage.setItem("currentUser", JSON.stringify(updated));

            // Also update the full user in users list
            const users = get().users.map((u) =>
                u.id === updated.id ? { ...u, savedRecipes: updated.savedRecipes } : u
            );
            setLocalUsers(users);
            set({ users });
        } catch (err) {
            set({ error: "Failed to unsave recipe" });
        }
    },
}));
