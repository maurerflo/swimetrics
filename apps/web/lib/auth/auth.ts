import NextAuth, {NextAuthConfig} from "next-auth";
import Keycloak from "next-auth/providers/keycloak";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@repo/database";

const prismaAdapter = PrismaAdapter(prisma);

export const authConfig: NextAuthConfig = {
    adapter: prismaAdapter,
    providers: [
        Keycloak({
            clientId: process.env.KEYCLOAK_CLIENT_ID || "",
            clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "",
            issuer: process.env.KEYCLOAK_ISSUER || "",
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60,
    },
    // pages: {
    //     signIn: "/auth/signin",
    // },
    callbacks: {
        async jwt({token, account, user}) {
            console.log("foo");
            if (account) {
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
                token.id = user?.id || account.providerAccountId;
            }
            return token;
        },
    },
    debug: process.env.NODE_ENV === "development",
    secret: process.env.AUTH_SECRET,
    // logger: {
    //     error(error) {
    //         if(process.env.NODE_ENV === "development") console.error(error.name, error.message)
    //     },
    //     warn(code) {
    //         if(process.env.NODE_ENV === "development") console.warn(code)
    //     },
    //     debug(code, metadata) {
    //         console.debug(code, metadata)
    //     }
    // }
};

export const {handlers, auth, signIn, signOut} = NextAuth(authConfig);
