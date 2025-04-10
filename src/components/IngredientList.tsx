import React from "react";

interface IngredientListProps {
    ingredients: string[];
}

// Hardcoded substitution suggestions
const substitutions: Record<string, string> = {
    // Dairy & Lactose
    "Milk": "Use almond milk, oat milk, or soy milk instead of dairy",
    "Butter": "Try coconut oil, olive oil, or vegan butter as a substitute",
    "Cream": "Use coconut cream or cashew cream as a non-dairy alternative",
    "Cheese": "Nutritional yeast or plant-based cheese are great alternatives",

    // Meat & Protein
    "Beef": "Use lentils, mushrooms, or tofu for a vegetarian option",
    "Chicken": "Try chickpeas, tofu, or jackfruit for a plant-based option",
    "Pork": "Use tempeh, jackfruit, or seitan for a meatless alternative",
    "Eggs": "Use flaxseed meal (1 tbsp + 3 tbsp water) or applesauce (1/4 cup) per egg",

    // Gluten & Grains
    "Spaghetti": "Zucchini noodles or gluten-free pasta can be used instead",
    "Bread Crumbs": "Use crushed gluten-free crackers or oats",
    "Flour": "Try almond flour, oat flour, or gluten-free flour blends",
    "Soy Sauce": "Use tamari or coconut aminos for a gluten-free option",

    // Sugar & Sweeteners
    "Sugar": "Use honey, maple syrup, or coconut sugar for natural sweetness",
    "Brown Sugar": "Use coconut sugar or maple syrup as a substitute",
    "Corn Syrup": "Try maple syrup or agave nectar instead",

    // Fats & Oils
    "Vegetable Oil": "Use olive oil, avocado oil, or coconut oil",
    "Shortening": "Use butter, coconut oil, or mashed bananas for baking",

    // Miscellaneous
    "Mayonnaise": "Use mashed avocado, hummus, or Greek yogurt",
    "Sour Cream": "Use Greek yogurt or blended silken tofu",
    "Yogurt": "Coconut or almond yogurt are great dairy-free alternatives",
    "Honey": "Maple syrup or agave nectar work well for vegan recipes",
};

export const IngredientList: React.FC<IngredientListProps> = ({ ingredients }) => {
    return (
        <ul className="list-disc pl-5">
            {ingredients.map((item, i) => (
                <li key={i} className="mb-2">
                    <div>{item}</div>
                    {substitutions[item] && (
                        <div className="text-sm italic text-gray-500">
                            💡 {substitutions[item]}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};
