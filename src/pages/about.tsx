import { cn } from "../lib/utils";
import { Card, CardContent } from "../components/ui/card";
import aboutImage from "../assets/image1.jpg"; // Make sure the image exists

export function About({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex justify-center p-6 md:p-10", className)} {...props}>
            <Card className="max-w-3xl w-full overflow-hidden shadow-lg">
                <img
                    src={aboutImage}
                    alt="Cooking together"
                    className="h-64 w-full object-cover"
                />
                <CardContent className="p-6 md:p-8 space-y-6">
                    <h1 className="text-3xl font-bold text-center">About Us</h1>
                    <p className="text-muted-foreground text-center text-lg">
                        Welcome to our recipe-sharing community!
                    </p>

                    <p className="text-base leading-relaxed">
                        Our platform is designed for food lovers, home cooks, and culinary explorers who want to share and discover delicious recipes from around the world. Whether you're here to show off your signature dish or try something new, you're in the right place.
                    </p>

                    <p className="text-base leading-relaxed">
                        We believe food is more than just fuel—it's a way to connect, celebrate, and create memories. That's why we've built a space where creativity in the kitchen meets a supportive community of like-minded foodies.
                    </p>

                    <p className="text-base leading-relaxed">
                        From traditional family recipes to modern twists, every recipe shared here has a story. We invite you to be part of that story—explore, cook, and contribute!
                    </p>

                    <div className="text-center pt-4">
                        <p className="text-sm text-muted-foreground">
                            Made with ❤️ by the Recipe Team
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
