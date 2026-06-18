// lib/auth.ts
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {

        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password required');
        }
        if (credentials.email!==process.env.ADMIN_EMAIL && credentials.password!==process.env.ADMIN_PASSWORD ) {
          throw new Error('Email or Password is not vallid');

        }

        // Simulate user lookup (replace with your DB logic)
        const user = {
          id: "1",
          email: credentials.email,
     
        };

        console.log("User object:", user); // Debug log
        
        return user;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log("JWT callback - user:", user); // Debug log
      console.log("JWT callback - token before:", token); // Debug log
      
      if (user) {
        token.id = user.id;
        token.email = user.email;
      
      }
      
      console.log("JWT callback - token after:", token); // Debug log
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback - token:", token); // Debug log
      console.log("Session callback - session before:", session); // Debug log
      
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
      }
      
      console.log("Session callback - session after:", session); // Debug log
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
    signOut: '/',
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

export default authOptions;