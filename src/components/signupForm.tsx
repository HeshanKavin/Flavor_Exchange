import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUserStore } from "../store/userStore"
import { cn } from "../lib/utils"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import image from "../assets/image1.jpg"

export function SignupForm({ className, ...props }: React.ComponentProps<"div">) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const signup = useUserStore((s) => s.signup)
    const navigate = useNavigate()

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault()
        if (signup(username, password)) {
            alert("Signup successful!")
            navigate("/")
        } else {
            alert("Username already exists")
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <form className="p-6 md:p-8" onSubmit={handleSignup}>
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Create an account</h1>
                                <p className="text-balance text-muted-foreground">
                                    Sign up to start sharing your favorite recipes.
                                </p>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    placeholder="e.g. johndoe"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
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
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <a href="/login" className="underline underline-offset-4">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </form>
                    <div className="relative hidden md:block">
                        <img
                            src={image}
                            alt="image"
                            className="absolute inset-0 h-full w-full object-cover pr-5"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
