'use client';
import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('keycloak', { callbackUrl: '/dashboard' })}>
        Sign In with Keycloak
      </button>
    </div>
  );
}
