import { Recipe } from "../types";

const sampleRecipes: Recipe[] = [
    {
        id: "1",
        title: "Spaghetti Bolognese",
        image: "https://img.taste.com.au/BMU2oLU3/taste/2016/11/beef-shepherds-pie-106408-1.jpeg",
        cookingTime: "30 mins",
        rating: 4.5,
        ingredients: ["Spaghetti", "Tomato", "Beef", "Onion", "Garlic"],
        instructions: "1. Boil spaghetti\n2. Cook beef\n3. Mix with sauce",
        userId: "u1",
        dietary: ["gluten-free"], // Add dietary restrictions here
    },
    {
        id: "2",
        title: "Chicken Curry",
        image: "https://imgstore.sndimg.com/foodcom/images/8de26738-07fc-43db-88d6-cdb0315b3186.jpg",
        cookingTime: "45 mins",
        rating: 4.8,
        ingredients: ["Chicken", "Curry powder", "Coconut milk"],
        instructions: "1. Cook chicken\n2. Add spices\n3. Simmer with coconut milk",
        userId: "u2",
        dietary: ["gluten-free", "paleo"], // Example of multiple dietary restrictions
    },
    {
        id: "1",
        title: "Spaghetti Bolognese",
        image: "https://img.taste.com.au/BMU2oLU3/taste/2016/11/beef-shepherds-pie-106408-1.jpeg",
        cookingTime: "30 mins",
        rating: 4.5,
        ingredients: ["Spaghetti", "Tomato", "Beef", "Onion", "Garlic"],
        instructions: "1. Boil spaghetti\n2. Cook beef\n3. Mix with sauce",
        userId: "u1",
        dietary: ["gluten-free"], // Add dietary restrictions here
    },
    {
        id: "2",
        title: "Chicken Curry",
        image: "https://imgstore.sndimg.com/foodcom/images/8de26738-07fc-43db-88d6-cdb0315b3186.jpg",
        cookingTime: "45 mins",
        rating: 4.8,
        ingredients: ["Chicken", "Curry powder", "Coconut milk"],
        instructions: "1. Cook chicken\n2. Add spices\n3. Simmer with coconut milk",
        userId: "u2",
        dietary: ["gluten-free", "paleo"], // Example of multiple dietary restrictions
    },
    {
        id: "1",
        title: "Spaghetti Bolognese",
        image: "https://img.taste.com.au/BMU2oLU3/taste/2016/11/beef-shepherds-pie-106408-1.jpeg",
        cookingTime: "30 mins",
        rating: 4.5,
        ingredients: ["Spaghetti", "Tomato", "Beef", "Onion", "Garlic"],
        instructions: "1. Boil spaghetti\n2. Cook beef\n3. Mix with sauce",
        userId: "u1",
        dietary: ["gluten-free"], // Add dietary restrictions here
    },
    {
        id: "2",
        title: "Chicken Curry",
        image: "https://imgstore.sndimg.com/foodcom/images/8de26738-07fc-43db-88d6-cdb0315b3186.jpg",
        cookingTime: "45 mins",
        rating: 4.8,
        ingredients: ["Chicken", "Curry powder", "Coconut milk"],
        instructions: "1. Cook chicken\n2. Add spices\n3. Simmer with coconut milk",
        userId: "u2",
        dietary: ["gluten-free", "paleo"], // Example of multiple dietary restrictions
    },
];

export const seedRecipes = () => {
    const existing = localStorage.getItem("recipes");
    if (!existing) {
        localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
    }
};
