import { create } from 'zustand';
import { Recipe } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface RecipeStore {
    recipes: Recipe[];
    loading: boolean;
    error: string | null;
    fetchRecipes: () => void;
    addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
    updateRecipe: (recipe: Recipe) => void;
    deleteRecipe: (id: string) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
    recipes: [],
    loading: false,
    error: null,

    fetchRecipes: () => {
        set({ loading: true, error: null });
        try {
            const stored = localStorage.getItem('recipes');
            const recipes = stored ? JSON.parse(stored) : [];
            set({ recipes, loading: false });
        } catch (err) {
            set({ error: 'Failed to fetch recipes.', loading: false });
        }
    },

    addRecipe: (recipe) => {
        set({ loading: true, error: null });
        try {
            const newRecipe = { ...recipe, id: uuidv4() };
            const stored = localStorage.getItem('recipes');
            const current = stored ? JSON.parse(stored) : [];
            const updated = [...current, newRecipe];
            localStorage.setItem('recipes', JSON.stringify(updated));
            set({ recipes: updated, loading: false });
        } catch (err) {
            set({ error: 'Failed to add recipe.', loading: false });
        }
    },

    updateRecipe: (updatedRecipe) => {
        set({ loading: true, error: null });
        try {
            const stored = localStorage.getItem('recipes');
            const current = stored ? JSON.parse(stored) : [];
            const updated = current.map((r: Recipe) =>
                r.id === updatedRecipe.id ? updatedRecipe : r
            );
            localStorage.setItem('recipes', JSON.stringify(updated));
            set({ recipes: updated, loading: false });
        } catch (err) {
            set({ error: 'Failed to update recipe.', loading: false });
        }
    },

    deleteRecipe: (id) => {
        set({ loading: true, error: null });
        try {
            const stored = localStorage.getItem('recipes');
            const current = stored ? JSON.parse(stored) : [];
            const updated = current.filter((r: Recipe) => r.id !== id);
            localStorage.setItem('recipes', JSON.stringify(updated));
            set({ recipes: updated, loading: false });
        } catch (err) {
            set({ error: 'Failed to delete recipe.', loading: false });
        }
    },
}));
