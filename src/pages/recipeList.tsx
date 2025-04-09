import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/recipeStore";
import { RecipeCard } from "../components/recipe-card";

export const RecipeList = () => {
    const { recipes, fetchRecipes } = useRecipeStore();
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    const filtered = recipes.filter((r) =>
        r.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-10">
            <div className="items-center text-center ">
                <h1 className="text-3xl font-bold mb-4">Recipes</h1>
                <p className="text-gray-600 mb-4">Find your favorite recipes!</p>
            </div>
            <input
                className="mb-6 p-2 w-full border rounded"
                placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};
