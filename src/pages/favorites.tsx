import { useRecipeStore } from "../store/recipeStore";
import { useUserStore } from "../store/userStore";
import { useEffect, useState } from "react";
import { RecipeCard } from "../components/recipe-card"; // Import the RecipeCard component
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Favorites = () => {
    const { recipes, fetchRecipes } = useRecipeStore();
    const { user, unsaveRecipe } = useUserStore();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    if (!user) {
        return <p className="text-center mt-10 text-xl">Please log in to see your favorites.</p>;
    }

    const favoriteRecipes = recipes.filter((r) => user.savedRecipes.includes(r.id));

    const filteredFavorites = favoriteRecipes.filter((recipe) => {
        const query = searchQuery.toLowerCase();
        return (
            recipe.title.toLowerCase().includes(query) ||
            recipe.ingredients.some((ing) => ing.toLowerCase().includes(query))
        );
    });

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>

            <Input
                placeholder="Search by title or ingredient..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="mb-6 max-w-md"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredFavorites.length > 0 ? (
                    filteredFavorites.map((recipe) => (
                        <div key={recipe.id} className="relative">
                            <RecipeCard recipe={recipe} />
                            <Button
                                variant="destructive"
                                onClick={() => unsaveRecipe(recipe.id)}
                                className="absolute bottom-1 left-4 bg-red-500 hover:bg-red-600"
                            >
                                Remove from Favorites
                            </Button>
                        </div>
                    ))
                ) : (
                    <p>No matching recipes found.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
