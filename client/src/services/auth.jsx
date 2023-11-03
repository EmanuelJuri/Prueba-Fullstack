export const login = async (values) => {
    const body = {
        email: values.email,
        password: values.password
    }

    const response = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)

    })

    const data = await response.json()

    window.localStorage.setItem('sesionPrueba', JSON.stringify(data))
    return data
}

export const logout = async () => {
    window.localStorage.removeItem('sesionPrueba')
}

export const register = async (values) => {
    const body = {
        name: values.username,
        email: values.email,
        password: values.password
    }

    const response = await fetch('http://localhost:3000/api/register', {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    if (response?.status === 201) {
        // login(body)
    }
    // const data = await response.json()
    return response
}
