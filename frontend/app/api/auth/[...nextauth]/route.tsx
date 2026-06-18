

import NextAuth from "next-auth";
import { authOptions } from "../../../lib/nextauthOptions"; // or your auth config location

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };