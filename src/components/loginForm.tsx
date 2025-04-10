import { useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserStore } from "../store/userStore";
import { cn } from "../lib/utils";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import image from "../assets/image1.jpg";

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const login = useUserStore((s) => s.login);
    const navigate = useNavigate();

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const trimmedUsername = username.trim();
        if (login(trimmedUsername, password)) {
            // alert("Login successful!");
            navigate("/");
        } else {
            alert("Invalid username or password");
        }
    }, [username, password, login, navigate]);

    return (
        <div className={cn("flex flex-col", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form onSubmit={handleSubmit} className="p-6 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome back</h1>
                                <p className="text-balance text-muted-foreground">Login to your recipe account</p>
                            </div>

                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="johndoe"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoComplete="username"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    required
                                />
                            </div>

                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link to="/signup" className="underline underline-offset-4">
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </form>

                    <div className="relative hidden md:block">
                        <img
                            src={image}
                            alt="image"
                            className="absolute inset-0 h-full w-full object-cover pr-5 "
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
