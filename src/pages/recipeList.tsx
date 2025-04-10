import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/recipeStore";
import { RecipeCard } from "../components/recipe-card";
import { RecipeFilter } from "../components/recipeFilter"; // Importing the reusable filter

export const RecipeList = () => {
    const { recipes, fetchRecipes } = useRecipeStore();
    const [search, setSearch] = useState("");
    const [dietaryRestriction, setDietaryRestriction] = useState("");

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    const filteredRecipes = recipes.filter((recipe) => {
        const isSearchMatch = recipe.title.toLowerCase().includes(search.toLowerCase());
        const isDietaryMatch =
            !dietaryRestriction || recipe.dietary.includes(dietaryRestriction);

        return isSearchMatch && isDietaryMatch;
    });

    const handleSearchChange = (query: string) => {
        setSearch(query);
    };

    const handleDietaryChange = (dietary: string) => {
        setDietaryRestriction(dietary);
    };

    return (
        <div className="p-10">
            <div className="items-center text-center">
                <h1 className="text-3xl font-bold mb-4">Recipes</h1>
                <p className="text-gray-600 mb-4">Find your favorite recipes!</p>
            </div>

            {/* Reusable Filter Component */}
            <RecipeFilter
                onSearchChange={handleSearchChange}
                onDietaryChange={handleDietaryChange}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};
