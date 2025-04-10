import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Home } from "./pages/home";
import { RecipeDetails } from "./pages/recipeDetails";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { useEffect } from "react";
import { seedRecipes } from "./lib/mockData";
import { AddRecipe } from "./pages/addRecipe";
import { EditRecipe } from "./pages/editRecipe";
import { Navbar } from "./components/navbar";
import Favorites from "./pages/favorites";
import { RecipeList } from "./pages/recipeList";
import { About } from "./pages/about";
import { Footer } from "./components/footer";


export default function App() {
  useEffect(() => {
    seedRecipes();
  }, []);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="pt-15 min-h-screen flex flex-col bg-muted">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/edit/:id" element={<EditRecipe />} />
              <Route path="/add" element={<AddRecipe />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/recipeList" element={<RecipeList />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
