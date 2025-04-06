'use client';

import {Fingerprint} from "lucide-react";
import {Button} from "@repo/ui/components/button";
import {signIn} from "next-auth/react";
import Link from "next/link";
import {useState} from "react";

export default function SignUpForm() {

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await signIn('nodemailer', {
                redirectTo: '/dashboard',
                email: email,
                name: "maxx foo"
            });
        } catch (error) {
            console.error('Sign up error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeycloakSignIn = () => {
        signIn('keycloak', {redirectTo: '/dashboard'});
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                    <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email">
                        Email
                    </label>
                    <input type="email"
                           className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                           id="email"
                           placeholder="m@example.com"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           required={true}
                    />
                </div>

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Create an account'}
                </Button>

                <div className="flex items-center gap-4">
                    <span className="h-px w-full bg-gray-100"></span><span
                    className="text-xs text-zinc-600">OR</span><span
                    className="h-px w-full bg-gray-100"></span>
                </div>

                <Button variant="outline" onClick={handleKeycloakSignIn}>
                    <Fingerprint/>
                    Sign up with Kapplers ID
                </Button>

            </form>
            <div className="mt-4 text-sm text-zinc-600">
                By continuing, you&#x27;re agreeing to our
                <Link href="#" className="ml-1 underline hover:text-gray-800">Terms and Privacy Policy.</Link>
            </div>
        </>
    );
}
