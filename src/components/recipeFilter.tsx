import { useState } from "react";
import { Input } from "./ui/input";

interface RecipeFilterProps {
    onSearchChange: (searchQuery: string) => void;
    onDietaryChange: (dietaryRestriction: string) => void;
}

export const RecipeFilter = ({ onSearchChange, onDietaryChange }: RecipeFilterProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedDietary, setSelectedDietary] = useState("");

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        //console.log("Search Query:", query);
        onSearchChange(query);  // Pass the search query to the parent component
    };

    const handleDietaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const dietary = e.target.value;
        setSelectedDietary(dietary);
        //console.log("Dietary Restriction:", dietary);
        onDietaryChange(dietary);  // Pass the dietary filter to the parent component
    };

    return (
        <div className="flex items-center mb-6 space-x-4 px-2">
            <Input
                type="text"
                placeholder="Search recipes..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 w-full border rounded"
            />
            <select
                value={selectedDietary}
                onChange={handleDietaryChange}
                className="p-2 bg-accent border rounded"
            >
                <option value="">All Diets</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="paleo">Paleo</option>
                <option value="keto">Keto</option>
            </select>
        </div>

    );
};
