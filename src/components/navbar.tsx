import { useUserStore } from "../store/userStore";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeProvider } from "./theme-provider";
import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
    const { user, logout } = useUserStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md p-4 mx-5 flex justify-between items-center border-b">
                {/* Logo / App Name */}
                <Link to="/" className="font-bold text-lg">Flavor Exchange</Link>

                {/* Navigation Links */}
                <nav className="flex items-center space-x-4">
                    <Link to="/">Home</Link>
                    <Link to="/recipeList">Recipes</Link>
                    {user && <Link to="/favorites">Favorites</Link>}
                    <Link to="/about">About</Link>
                </nav>

                {/* User / Action Buttons */}
                <div className="flex items-center space-x-2">
                    {user ? (
                        <>
                            <span className="text-sm">Hello, {user.username}</span>
                            <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                        </>
                    ) : (
                        <Link to="/login"><Button>Login</Button></Link>
                    )}
                    <Button
                        variant="secondary"
                        onClick={() => {
                            if (!user) {
                                alert("You must be logged in to add a recipe.");
                                navigate("/login");
                            } else {
                                navigate("/add");
                            }
                        }}
                    >
                        + Add New Recipe
                    </Button>

                    <ModeToggle />
                </div>
            </header>
        </ThemeProvider>
    );
};
