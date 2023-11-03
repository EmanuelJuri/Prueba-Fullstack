import { prisma } from '../db.js'
import { encrypt } from '../utils/bcrypt.handler.js';

export const getAllUsers = async (req, res) => {
    try {
        const response = await prisma.user.findMany()

        if (!response.length > 0) return res.status(404).json('Message Error: There are no users yet')

        res.json(response)

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Load users failed, try again')
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params

        const user = await prisma.user.findUnique({
            where: {
                id: +id
            }
        })

        if (!user?.id) return res.status(404).json('Message Error: User not found')

        res.json(user)

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Load user failed, try again')
    }
}

export const updateUser = async (req, res) => {
    try {
        let notFoundUser
        if (!req.body.password) {
            const { name, email, id } = req.body

            const response = await prisma.user.update({
                where: {
                    id: +id
                },
                data: {
                    name,
                    email,
                }
            })
            notFoundUser = response?.id

        } else {
            const { id } = req.params
            const { name, email, password } = req.body

            const passwordHash = await encrypt(password)

            const response = await prisma.user.update({
                where: {
                    id: +id
                },
                data: {
                    name,
                    email,
                    password: passwordHash
                }
            })

            notFoundUser = response?.id
        }

        if (notFoundUser === 0) return res.status(404).json('Message Error: User not found')

        res.send(`User updated successfully`)

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Update user failed')
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params

        const response = await prisma.user.delete({
            where: {
                id: +id
            }
        })

        if (response?.id === 0) return res.status(404).json('Message Error: User not found')

        res.send('User deleted successfully')

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Delete user failed')
    }
}