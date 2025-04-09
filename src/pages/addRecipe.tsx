import { useNavigate } from "react-router-dom";
import { RecipeForm } from "../components/recipe-form";

export const AddRecipe = () => {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold p-4">Add a New Recipe</h1>
            <RecipeForm onSubmitSuccess={() => navigate("/")} />
        </div>
    );
};
