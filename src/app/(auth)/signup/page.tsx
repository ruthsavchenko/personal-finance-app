import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthLayout } from "../AuthLayout";

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Sign Up"
            bottomText={
                <>
                    Already have an account?{" "}
                    <a href="/login" className="text-grey-900 text-preset-4-bold underline underline-offset-2">
                        Login
                    </a>
                </>
            }
        >
            <form className="flex flex-col space-y-200">
                <Input placeholder="Your Name" fullWidth label="Name" />
                <Input type="email" placeholder="Email" label="Email" fullWidth />
                <Input type="password" placeholder="Password" label="Password" fullWidth />
                <Button type="submit" className="w-full">
                    Sign up
                </Button>
            </form>
        </AuthLayout>
    );
}
