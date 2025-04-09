import { Recipe } from "../types";

const sampleRecipes: Recipe[] = [

];

export const seedRecipes = () => {
    const existing = localStorage.getItem("recipes");
    if (!existing) {
        localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
    }
};
