import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { prisma } from '../prisma/prisma';

const prismaAdapter = PrismaAdapter(prisma);
prismaAdapter.linkAccount = async (data: any) => {
  delete data['not-before-policy'];
  prisma.account.create({ data });
};

export const authConfig: AuthOptions = {
  adapter: prismaAdapter,
  debug: true,
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || '',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      issuer: process.env.KEYCLOAK_ISSUER || '', // Keycloak Base URL + Realm, e.g., "https://keycloak.example.com/realms/myrealm"
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      // if (session.user) {
      //   session.user.id = token.sub; // Add Keycloak user ID to session
      // }

      // console.log('session', session);
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token; // Store access token for API calls
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
