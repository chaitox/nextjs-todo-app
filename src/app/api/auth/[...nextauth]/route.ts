import { getUserFromDb } from "@/lib/utils/db"
import { saltAndHashPassword } from "@/lib/utils/password"
import { signInSchema } from "@/lib/zod/zod"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { ZodError } from "zod"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                try {
                    const { email, password } = await signInSchema.parseAsync(credentials)
                    const hashed = saltAndHashPassword(password)
                    const user = await getUserFromDb(email, hashed)

                    if (!user) throw new Error("Invalid credentials.")
                    return user
                } catch (err) {
                    if (err instanceof ZodError) return null
                    throw err
                }
            }
        })
    ],
    pages: {
        signIn: "/login", // tu página personalizada de login
    }
})

export { handler as GET, handler as POST }
