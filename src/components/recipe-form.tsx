import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRecipeStore } from "../store/recipeStore";
import { useUserStore } from "../store/userStore";

type RecipeFormProps = {
    recipeId?: string;
    onSubmitSuccess?: () => void;
};

const dietaryOptions = [
    "gluten-free",
    "vegan",
    "vegetarian",
    "paleo",
    "keto",
]

export const RecipeForm: React.FC<RecipeFormProps> = ({ recipeId, onSubmitSuccess }) => {
    const { addRecipe, updateRecipe, recipes } = useRecipeStore();
    const { user } = useUserStore();

    const existing = recipes.find((r) => r.id === recipeId);

    const [title, setTitle] = useState(existing?.title || "");
    const [cookingTime, setCookingTime] = useState(existing?.cookingTime || "");
    const [rating, setRating] = useState(existing?.rating.toString() || "");
    const [image, setImage] = useState(existing?.image || "");
    const [ingredients, setIngredients] = useState(existing?.ingredients.join(", ") || "");
    const [instructions, setInstructions] = useState(existing?.instructions || "");
    const [dietary, setDietary] = useState<string[]>(existing?.dietary || []);

    const toggleDietary = (option: string) => {
        setDietary((prev) =>
            prev.includes(option)
                ? prev.filter((d) => d !== option)
                : [...prev, option]
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            alert("You must be logged in");
            return;
        }

        const newRecipe = {
            id: recipeId || crypto.randomUUID(),
            userId: user.id,
            title,
            cookingTime,
            rating: parseFloat(rating),
            image,
            ingredients: ingredients.split(",").map((ing) => ing.trim()),
            instructions,
            dietary: existing?.dietary || null, // Add dietary property
        };

        if (recipeId) {
            updateRecipe(newRecipe);
        } else {
            addRecipe(newRecipe);
        }

        if (onSubmitSuccess) onSubmitSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
            <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <Input
                placeholder="Cooking Time (e.g., 30 mins)"
                value={cookingTime}
                onChange={(e) => setCookingTime(e.target.value)}
            />
            <Input
                type="number"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
            />
            <Input placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} />

            {/* Display Image Preview */}
            {image && (
                <div className="w-full h-40 bg-gray-100 mt-2">
                    <img src={image} alt="Recipe" className="object-cover w-full h-full rounded" />
                </div>
            )}
            <Input
                placeholder="Ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
            />
            <textarea
                placeholder="Instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="w-full h-40 border rounded p-2"
            />
            {/* Dietary selection */}
            <div className="space-y-2">
                <label className="font-medium">Dietary Restrictions:</label>
                <div className="flex flex-wrap gap-4">
                    {dietaryOptions.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                checked={dietary.includes(option)}
                                onChange={() => toggleDietary(option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
            <Button type="submit">{recipeId ? "Update Recipe" : "Add Recipe"}</Button>
        </form>
    );
};
