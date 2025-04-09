import { RecipeList } from "./recipeList";
import banner from "../assets/banner.jpg";

export const Home = () => {
    return (
        <div className="p-5 bg-muted">
            <div className="p-5">
                <img
                    src={banner}
                    alt="Delicious food"
                    className="w-full h-screen object-cover rounded-xl mb-4"
                />
            </div>
            <RecipeList />
        </div>
    );
};
