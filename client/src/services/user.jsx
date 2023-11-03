import { login } from "./auth"

const loggedUserJSON = window.localStorage.getItem('sesionPrueba')
if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    var token = user.token
}

export const getUserById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "GET",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    const data = await response.json()

    return data
}

export const updateUser = async (values) => {
    let body
    let id

    if (values[0].password && values[0].newPassword) {
        const bodyLogin = {
            email: values[0].email,
            password: values[0].password
        }

        const dataUser = await login(bodyLogin)
        id = dataUser?.id

        body = {
            name: dataUser.name,
            email: dataUser.email,
            password: values[0].newPassword
        }
    } else {
        id = values[1].id
        body = {
            name: values[0].name || values[1][0].name,
            email: values[0].email || values[1][0].email,
            id: values[1][0].id,
        }
    }

    const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "PUT",
        mode: "cors",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    })
    // const data = await response.json()
    return response
}