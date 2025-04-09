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
    },
    {
        id: "3",
        title: "Vegetable Stir Fry",
        image: "https://www.tourisme-vienne.com/wp-content/uploads/2023/09/food-3270461_1280.jpg",
        cookingTime: "20 mins",
        rating: 4.2,
        ingredients: ["Broccoli", "Carrot", "Bell pepper", "Soy sauce", "Garlic"],
        instructions: "1. Chop vegetables\n2. Stir-fry with garlic\n3. Add soy sauce",
        userId: "u3",
    },
    {
        id: "4",
        title: "Beef Tacos",
        image: "https://madaboutfood.co/wp-content/uploads/2021/05/recipes-chicken-730x730.jpg",
        cookingTime: "25 mins",
        rating: 4.7,
        ingredients: ["Beef", "Taco shells", "Lettuce", "Cheese", "Tomato"],
        instructions: "1. Cook beef\n2. Prepare toppings\n3. Fill taco shells",
        userId: "u4",
    },
    {
        id: "5",
        title: "Pancakes",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/1/23/0/KC0101_Italian-Chicken-Pasta-Salad_s4x3.jpg.rend.hgtvcom.616.493.suffix/1417624061835.jpeg",
        cookingTime: "15 mins",
        rating: 4.6,
        ingredients: ["Flour", "Milk", "Eggs", "Baking powder", "Sugar"],
        instructions: "1. Mix ingredients\n2. Pour on griddle\n3. Flip when bubbly",
        userId: "u5",
    },
    {
        id: "6",
        title: "Caesar Salad",
        image: "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2012/8/4/0/ei1005_shrimplinguine.jpg.rend.hgtvcom.966.725.suffix/1416869803550.jpeg",
        cookingTime: "10 mins",
        rating: 4.3,
        ingredients: ["Lettuce", "Croutons", "Parmesan", "Caesar dressing"],
        instructions: "1. Chop lettuce\n2. Add croutons and cheese\n3. Toss with dressing",
        userId: "u6",
    },
    {
        id: "7",
        title: "Grilled Salmon",
        image: "https://media-cldnry.s-nbcnews.com/image/upload/t_focal-758x379,f_auto,q_auto:best/newscms/2021_32/1761440/roasted-salmon-mc-main-210813.jpg",
        cookingTime: "20 mins",
        rating: 4.9,
        ingredients: ["Salmon", "Lemon", "Garlic", "Olive oil", "Herbs"],
        instructions: "1. Marinate salmon\n2. Grill until cooked\n3. Serve with lemon",
        userId: "u7",
    },
];

export const seedRecipes = () => {
    const existing = localStorage.getItem("recipes");
    if (!existing) {
        localStorage.setItem("recipes", JSON.stringify(sampleRecipes));
    }
};
