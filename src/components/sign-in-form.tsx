"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignInForm() {
    const router = useRouter()
    const [error, setError] = useState("")

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email") as string
        const password = form.get("password") as string

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        })

        if (result?.error) {
            setError("Invalid credentials")
        } else {
            router.push("/")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input name="email" type="email" required />
            </label>
            <label>
                Password
                <input name="password" type="password" required />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Sign In</button>
        </form>
    )
}
