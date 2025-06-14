import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions=({
  providers: [
    CredentialsProvider({
       
        name: "Credentials",
       
        credentials: {
            email: { label: "Username", type: "text", placeholder: "Enter your email..." },
            password: { label: "Password", type: "password" , placeholder: "Enter your password..."}
        },
        async authorize(credentials):Promise<any> {

        const checkClient = await prisma.user.findFirst({
            where:{
                email: credentials?.email,
            }
        })

        // console.log("Check Client:", checkClient);

        if(!checkClient) {return null}

        const user = {id: checkClient.id, 
          email: checkClient.email, 
          name: checkClient.username,
          roleType: checkClient.role}
        console.log("User details:", user);

        if (user) {
            return user
        } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        }
    })
    ],
    session: {
        strategy: "jwt", 
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // console.log("User in JWT callback:", user);
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.roleType = user.roleType

        // console.log("Token after setting user details:", token);
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("token in session-> ", token)
      if (token) {
        session.user = {
            ...session.user,
            id : token.id as string,
            email: token.email as string,
            name: token.name as string,
            roleType: token.roleType as string
        }

        // console.log("Session after setting user details:", session.user);
        
      }
      return session;
    },
  },
})

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }