'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <p>You must be signed in to view this page.</p>
        <button onClick={() => signIn('keycloak')}>
          Sign In with Keycloak
        </button>
      </div>
    );
  }

  if (session.user) {
    return (
      <div>
        <p>Welcome, {session.user.name}!</p>
        <p>Email: {session.user.email}</p>
        <button onClick={() => signOut({ callbackUrl: '/' })}>Sign Out</button>
      </div>
    );
  }

  return <div>foo</div>;
}
