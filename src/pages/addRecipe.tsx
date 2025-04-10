import { useNavigate } from "react-router-dom";
import { RecipeForm } from "../components/recipe-form";
import RecipeImage from "../assets/image1.jpg";

export const AddRecipe = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto pt-5">
            <div className="text-center mb-4">
                <img
                    src={RecipeImage}
                    alt="Recipe Image"
                    className="mx-auto rounded-4xl w-full h-100 object-cover mb-4"
                />
                <p className="text-lg font-medium">Share your favorite recipes with the world!</p>
            </div>

            <h1 className="text-2xl text-center font-bold p-2">Add a New Recipe</h1>
            <RecipeForm onSubmitSuccess={() => navigate("/")} />
        </div>
    );
};
