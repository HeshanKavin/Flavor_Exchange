import { create } from 'zustand';
import { Recipe } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface RecipeStore {
    recipes: Recipe[];
    fetchRecipes: () => void;
    addRecipe: (recipe: Omit<Recipe, 'id'>) => void;
    updateRecipe: (recipe: Recipe) => void;
    deleteRecipe: (id: string) => void;
}

export const useRecipeStore = create<RecipeStore>((set) => ({
    recipes: [],
    fetchRecipes: () => {
        const stored = localStorage.getItem('recipes');
        const recipes = stored ? JSON.parse(stored) : [];
        set({ recipes });
    },
    addRecipe: (recipe) => {
        const newRecipe = { ...recipe, id: uuidv4() };
        const updated = [...(JSON.parse(localStorage.getItem('recipes') || '[]')), newRecipe];
        localStorage.setItem('recipes', JSON.stringify(updated));
        set({ recipes: updated });
    },
    updateRecipe: (updatedRecipe) => {
        const current = JSON.parse(localStorage.getItem('recipes') || '[]');
        const updated = current.map((r: Recipe) => (r.id === updatedRecipe.id ? updatedRecipe : r));
        localStorage.setItem('recipes', JSON.stringify(updated));
        set({ recipes: updated });
    },
    deleteRecipe: (id) => {
        const current = JSON.parse(localStorage.getItem('recipes') || '[]');
        const updated = current.filter((r: Recipe) => r.id !== id);
        localStorage.setItem('recipes', JSON.stringify(updated));
        set({ recipes: updated });
    },
}));
