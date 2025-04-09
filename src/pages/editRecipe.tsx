import { useNavigate, useParams } from "react-router-dom";
import { RecipeForm } from "../components/recipe-form";

export const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold p-4">Edit Recipe</h1>
            <RecipeForm recipeId={id} onSubmitSuccess={() => navigate(`/recipe/${id}`)} />
        </div>
    );
};
