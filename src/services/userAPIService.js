export async function SignupUserAPI(user) {
    try {
        const response =  await fetch("http://localhost:3000/students", {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message)
    }
}