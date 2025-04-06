'use client';
import {signIn} from "next-auth/react";


export default function Form() {
    return (
        <button
            onClick={() => signIn('keycloak', {redirectTo: '/dashboard'})}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-white hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full">
            <img src="/Microsoft_logo.svg" alt="logo" className="h-4 pr-2"/>
            Sign up with Active Directory
        </button>
    )
}
