import React, { useState, ChangeEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRecipeStore } from "../store/recipeStore";
import { useUserStore } from "../store/userStore";
import { v4 as uuidv4 } from "uuid";

type RecipeFormProps = {
    recipeId?: string;
    onSubmitSuccess?: () => void;
};

export const RecipeForm: React.FC<RecipeFormProps> = ({ recipeId, onSubmitSuccess }) => {
    const { addRecipe, updateRecipe, recipes } = useRecipeStore();
    const { user } = useUserStore();

    const existingRecipe = recipes.find((r) => r.id === recipeId);
    const [formData, setFormData] = useState({
        title: existingRecipe?.title || "",
        cookingTime: existingRecipe?.cookingTime || "",
        rating: existingRecipe?.rating.toString() || "",
        image: existingRecipe?.image || "",
        ingredients: existingRecipe?.ingredients.join(", ") || "",
        instructions: existingRecipe?.instructions || "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!user) {
            alert("You must be logged in");
            return;
        }

        const { title, cookingTime, rating, image, ingredients, instructions } = formData;
        if (!title || !cookingTime || !rating || !image || !ingredients || !instructions) {
            alert("Please fill out all fields.");
            return;
        }

        const newRecipe = {
            id: recipeId || uuidv4(),
            userId: user.id,
            title,
            cookingTime,
            rating: parseFloat(rating),
            image,
            ingredients: ingredients.split(",").map((ing) => ing.trim()),
            instructions,
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
            <Input
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                name="title"
            />
            <Input
                placeholder="Cooking Time (e.g., 30 mins)"
                value={formData.cookingTime}
                onChange={handleChange}
                name="cookingTime"
            />
            <Input
                type="number"
                placeholder="Rating (1-5)"
                value={formData.rating}
                onChange={handleChange}
                name="rating"
            />
            <Input
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                name="image"
            />

            {/* Display Image Preview */}
            {formData.image && (
                <div className="w-full h-40 mt-2">
                    <img src={formData.image} alt="Recipe" className="object-cover w-full h-full rounded" />
                </div>
            )}
            <Input
                placeholder="Ingredients (comma-separated)"
                value={formData.ingredients}
                onChange={handleChange}
                name="ingredients"
            />
            <textarea
                placeholder="Instructions"
                value={formData.instructions}
                onChange={handleChange}
                name="instructions"
                className="w-full h-40 border rounded p-2"
            />
            <Button type="submit">{recipeId ? "Update Recipe" : "Add Recipe"}</Button>
        </form>
    );
};
