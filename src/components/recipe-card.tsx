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
                {/* Dietary Tags */}
                {recipe.dietary?.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                        {recipe.dietary.slice(0, 2).map((tag: string, index: number, arr: string | any[]) => (
                            <span
                                key={tag}
                                className="font-bold py-0.5 rounded-full"
                            >
                                {tag}
                                {index < arr.length - 1 && <span className="mx-1">|</span>}
                            </span>
                        ))}
                        {recipe.dietary.length > 2 && (
                            <span className="text-xs">+{recipe.dietary.length - 2} more</span>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    </Link>
);
