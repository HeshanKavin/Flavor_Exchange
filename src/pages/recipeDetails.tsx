// RecipeDetails.tsx

import { useParams, useNavigate } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";
import { useUserStore } from "../store/userStore";
import { Button } from "../components/ui/button";
import { useEffect, useState } from "react";
import { SocialShare } from "../components/socialShare";
import Timer from "../components/timer";
import Modal from "../components/model";

export const RecipeDetails = () => {
    const { id } = useParams();
    const { recipes, fetchRecipes, deleteRecipe } = useRecipeStore();
    const { user, saveRecipe, unsaveRecipe } = useUserStore();

    const navigate = useNavigate();

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    const recipe = recipes.find((r) => r.id.toString() === id);
    if (!recipe) return <div className="p-6">Recipe not found.</div>;

    const isSaved = user?.savedRecipes.includes(recipe.id) ?? false;
    const isOwner = user?.id === recipe.userId;

    const handleSaveToggle = () => {
        if (!user) {
            alert("Please log in to save recipes");
            navigate("/login");
            return;
        }
        isSaved ? unsaveRecipe(recipe.id) : saveRecipe(recipe.id);
    };

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this recipe?")) {
            deleteRecipe(recipe.id);
            navigate("/");
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openTimerModal = () => setIsModalOpen(true);
    const closeTimerModal = () => setIsModalOpen(false);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-60 object-cover rounded-xl mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-sm mb-2">Cooking Time: {recipe.cookingTime}</p>
            {user && (
                <Button
                    onClick={openTimerModal}
                    variant="destructive"
                    className=" mb-2"
                >
                    Start Timer
                </Button>
            )}
            <p className="text-sm">⭐ {recipe.rating}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
            <ul className="list-disc list-inside">
                {recipe.ingredients.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">Instructions</h2>
            <pre className="p-4 rounded-md whitespace-pre-wrap">{recipe.instructions}</pre>

            <div className="flex gap-4 mt-6">
                <Button onClick={handleSaveToggle} className={isSaved ? "bg-red-500" : ""}>
                    {isSaved ? "Remove from Favorites" : "Save to Favorites"}
                </Button>

                {isOwner && (
                    <>
                        <Button onClick={() => navigate(`/edit/${recipe.id}`)} variant="secondary">
                            Edit
                        </Button>
                        <Button onClick={handleDelete} variant="destructive">
                            Delete
                        </Button>
                    </>
                )}
            </div>

            {/* Timer Modal */}
            <Modal isOpen={isModalOpen} onClose={closeTimerModal}>
                <Timer cookingTime={recipe.cookingTime} />
            </Modal>

            {/* Social Share Component */}
            <SocialShare url={window.location.href} title={recipe.title} image={recipe.image} />
        </div>
    );
};
