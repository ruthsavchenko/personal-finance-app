import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthLayout } from "../AuthLayout";

export default function LoginPage() {
    return (
        <AuthLayout
            title="Login"
            bottomText={
                <>
                    Need to create an account?{" "}
                    <a href="/signup" className="text-grey-900 text-preset-4-bold underline underline-offset-2">
                        Sign Up
                    </a>
                </>
            }
        >
            <form className="flex flex-col space-y-200">
                <Input type="email" placeholder="Enter your email" label="Email" />
                <Input type="password" placeholder="••••••••" label="Password" />
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </AuthLayout>
    );
}
