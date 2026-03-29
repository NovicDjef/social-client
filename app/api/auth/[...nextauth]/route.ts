import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'NmSolution',
      credentials: { email: { label: 'Email', type: 'email' }, password: { label: 'Password', type: 'password' } },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: credentials.email, password: credentials.password }),
          });
          const data = await res.json();
          if (!data.success) return null;
          return { id: data.data.user.id, email: data.data.user.email, name: `${data.data.user.firstName} ${data.data.user.lastName}`, accessToken: data.data.accessToken, refreshToken: data.data.refreshToken, locale: data.data.user.locale };
        } catch { return null; }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) { if (user) { token.accessToken = (user as any).accessToken; token.refreshToken = (user as any).refreshToken; token.locale = (user as any).locale; } return token; },
    async session({ session, token }) { (session as any).accessToken = token.accessToken; (session as any).locale = token.locale; return session; },
  },
  pages: { signIn: '/login' },
  session: { strategy: 'jwt', maxAge: 24 * 60 * 60 },
});
export { handler as GET, handler as POST };
