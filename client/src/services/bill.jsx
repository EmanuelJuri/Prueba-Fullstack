const loggedUserJSON = window.localStorage.getItem('sesionPrueba')
if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON)
    var token = user.token
}

export const getAllBills = async () => {
    const response = await fetch(`http://localhost:3000/api/bills`, {
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