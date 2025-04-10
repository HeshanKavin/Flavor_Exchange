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
        dietary: ["gluten-free"],
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
        dietary: ["gluten-free", "paleo"],
    },
    {
        id: "3",
        title: "Vegetarian Stir Fry",
        image: "https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg",
        cookingTime: "20 mins",
        rating: 4.7,
        ingredients: ["Tofu", "Bell peppers", "Soy sauce", "Garlic", "Ginger", "Carrots"],
        instructions: "1. Stir fry vegetables\n2. Add tofu\n3. Pour soy sauce and stir\n4. Garnish with sesame seeds",
        userId: "u3",
        dietary: ["vegetarian", "gluten-free"],
    },
    {
        id: "4",
        title: "Beef Tacos",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2017/01/Shakshuka-Recipe-The-Mediterranean-Dish-100.jpg",
        cookingTime: "25 mins",
        rating: 4.6,
        ingredients: ["Ground beef", "Taco shells", "Lettuce", "Tomato", "Cheese", "Sour cream"],
        instructions: "1. Cook beef\n2. Prepare taco shells\n3. Assemble with toppings",
        userId: "u4",
        dietary: ["low-carb"],
    },
    {
        id: "5",
        title: "Vegan Buddha Bowl",
        image: "https://mccormick.widen.net/content/dcmm0ckyyi/jpeg/Franks_Shake_On_Buffalo_Chicken_Dip_2024_800x800.jpg",
        cookingTime: "35 mins",
        rating: 5.0,
        ingredients: ["Quinoa", "Chickpeas", "Avocado", "Spinach", "Olives", "Tahini"],
        instructions: "1. Cook quinoa\n2. Prepare chickpeas\n3. Assemble bowl with vegetables\n4. Drizzle with tahini dressing",
        userId: "u5",
        dietary: ["vegan", "gluten-free", "paleo"],
    },
    {
        id: "6",
        title: "Salmon Salad",
        image: "https://assets.epicurious.com/photos/63ef9f657c3e98834ec8645e/1:1/w_4225,h_4225,c_limit/Paella_RECIPE_021523_47427.jpg",
        cookingTime: "30 mins",
        rating: 4.9,
        ingredients: ["Salmon fillets", "Mixed greens", "Olive oil", "Lemon", "Garlic", "Cherry tomatoes"],
        instructions: "1. Cook salmon\n2. Toss greens and veggies\n3. Add salmon on top\n4. Drizzle with olive oil and lemon",
        userId: "u6",
        dietary: ["gluten-free", "low-carb"],
    },

];

export const seedRecipes = () => {
    const existing = localStorage.getItem("recipes");
    if (!existing) {
        localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
    }
};
