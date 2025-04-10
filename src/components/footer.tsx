import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export const Footer = () => {
    return (
        <footer
            className="bg-background shadow-md p-4 mt-auto flex justify-between items-center border-t"
            aria-label="Footer Section"
        >
            <Link to="/" className="font-bold text-lg" aria-label="Go to homepage">
                Flavor Exchange
            </Link>
            <div className="flex items-center space-x-4">
                <p className="">&copy; 2025 Flavor Exchange, All Rights Reserved</p>
            </div>
            <div className="flex items-center space-x-2">
                <Button
                    variant="secondary"
                    onClick={() => {
                        alert("Contact feature coming soon!");
                    }}
                    aria-label="Contact us button"
                >
                    Contact Us
                </Button>
            </div>
        </footer>
    );
};
