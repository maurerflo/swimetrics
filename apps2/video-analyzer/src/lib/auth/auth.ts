import NextAuth, { AuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import KeycloakProvider from 'next-auth/providers/keycloak';
import { prisma } from '../prisma/prisma';

const prismaAdapter = PrismaAdapter(prisma);
prismaAdapter.linkAccount = async (data: any) => {
  data['not_before_policy'] = data['not-before-policy'];
  delete data['not-before-policy'];
  return prisma.account.create({ data });
};

export const authConfig: AuthOptions = {
  adapter: prismaAdapter,
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || '',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      issuer: process.env.KEYCLOAK_ISSUER || '',
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.id = user?.id || account.providerAccountId;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
