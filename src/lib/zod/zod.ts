import { object, string } from "zod"

export const signInSchema = object({
    email: string().email("Invalid email").min(1, "Email is required"),
    password: string().min(8, "Password must be more than 8 characters"),
})
