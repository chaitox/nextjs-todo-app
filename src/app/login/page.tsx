import SignInForm from "@/components/sign-in-form"

export default function LoginPage() {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", paddingTop: "4rem" }}>
            <h1>Login</h1>
            <hr />
            <div >
                <SignInForm />
            </div>
        </div>
    )
}
