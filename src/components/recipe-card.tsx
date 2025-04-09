import { Card, CardContent } from "../components/ui/card";
import { Recipe } from "../types";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => (
    <Link to={`/recipe/${recipe.id}`}>
        <Card className="rounded-2xl overflow-hidden hover:shadow-lg transition-all">
            <img src={recipe.image} className="w-full h-40 object-cover" />
            <CardContent className="p-4">
                <h3 className="text-xl font-semibold">{recipe.title}</h3>
                <p>⏱ {recipe.cookingTime}</p>
                <p>⭐ {recipe.rating}</p>
            </CardContent>
        </Card>
    </Link>
);
