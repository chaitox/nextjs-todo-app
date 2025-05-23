export async function getUserFromDb(email: string, hashedPassword: string) {
    // Simula una consulta a base de datos
    const dummyUser = {
        id: "1",
        name: "Test User",
        email: "test@example.com",
        password: hashedPassword,
    }

    if (email === dummyUser.email && hashedPassword === dummyUser.password) {
        return dummyUser
    }

    return null
}
