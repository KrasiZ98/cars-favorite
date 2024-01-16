export async function getAllUsers() {
   try {
        const response = await fetch('http://localhost:3004/users');

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        return error;
    }
}

export async function register(user) {
    try {
        const response = await fetch('http://localhost:3004/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok === false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        return await response.json();

    } catch (error) {
        return error;
    }
}
