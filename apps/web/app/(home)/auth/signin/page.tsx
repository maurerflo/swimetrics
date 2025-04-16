import SignInForm from "@/app/(home)/auth/signin/SignInForm";
import Link from "next/link";

export default function SignIn() {
    return (
        <section className="py-32">
            <div className="container mx-auto">
                <div className="flex flex-col gap-4">
                    <img src="https://www.shadcnblocks.com/images/block/block-1.svg" alt="logo" className="h-8"/>
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto w-full max-w-md">
                        <div className="flex flex-col space-y-1.5 p-6 items-center">

                            <h3 className="font-semibold tracking-tight text-xl">Log in with your email</h3>
                            <p className="text-sm text-zinc-600">Enter your information to login</p>
                        </div>
                        <div className="p-6 pt-0">
                            <SignInForm/>
                        </div>
                    </div>
                    <div className="mx-auto flex gap-1 text-sm">
                        <p>Don&#x27;t have an account yet?</p>
                        <Link href="#" className="underline">Log in</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
