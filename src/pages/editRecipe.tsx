import { useNavigate, useParams } from "react-router-dom";
import { RecipeForm } from "../components/recipe-form";
import RecipeImage from "../assets/image1.jpg";

export const EditRecipe = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto pt-5">
            <div className="text-center mb-4">
                <img
                    src={RecipeImage}
                    alt="Recipe Image"
                    className="mx-auto rounded-4xl w-full h-100 object-cover mb-4"
                />
                <p className="text-lg font-medium">Edit your recipe and share it with the world!</p>
            </div>

            <h1 className="text-2xl text-center font-bold p-2">Edit Recipe</h1>
            <RecipeForm recipeId={id} onSubmitSuccess={() => navigate(`/recipe/${id}`)} />
        </div>
    );
};
