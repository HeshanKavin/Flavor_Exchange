export interface Recipe {
    dietary: any;
    id: string;
    title: string;
    image: string;
    cookingTime: string;
    rating: number;
    ingredients: string[];
    instructions: string;
    userId: string;
}

export interface User {
    id: string;
    username: string;
    savedRecipes: string[];
}
