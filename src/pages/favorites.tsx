import { useEffect, useState } from "react";
import { useRecipeStore } from "../store/recipeStore";
import { useUserStore } from "../store/userStore";
import { RecipeCard } from "../components/recipe-card"; // Import the RecipeCard component
import { RecipeFilter } from "../components/recipeFilter"; // Importing the reusable filter
import { Button } from "../components/ui/button";
import favoriteRecipesImage from "../assets/image2.jpg"; // Import the image

const Favorites = () => {
    const { recipes, fetchRecipes } = useRecipeStore();
    const { user, unsaveRecipe } = useUserStore();
    const [search, setSearch] = useState("");
    const [dietaryRestriction, setDietaryRestriction] = useState("");

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    if (!user) {
        return <p className="text-center mt-10 text-xl">Please log in to see your favorites.</p>;
    }

    const favoriteRecipes = recipes.filter((r) => user.savedRecipes.includes(r.id));

    const filteredFavorites = favoriteRecipes.filter((recipe) => {
        const isSearchMatch = recipe.title.toLowerCase().includes(search.toLowerCase()) ||
            recipe.ingredients.some((ing) => ing.toLowerCase().includes(search.toLowerCase()));
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
        <div className="p-6">
            <div className="items-center text-center">
                <img
                    src={favoriteRecipesImage}
                    alt="favoriteRecipesImage"
                    className="mx-auto rounded-4xl w-full h-100 object-cover mb-4"
                />
                <h1 className="text-2xl font-bold mb-4">Your Favorite Recipes</h1>
            </div>
            {/* Reusable Filter Component */}
            <RecipeFilter
                onSearchChange={handleSearchChange}
                onDietaryChange={handleDietaryChange}
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
