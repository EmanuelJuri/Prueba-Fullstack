import { prisma } from '../db.js'
import { encrypt, verified } from '../utils/bcrypt.handler.js';
import { generateToken, verifyToken } from '../utils/jwt.handler.js';

export const registerNewUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        const existent = await prisma.user.findMany({
            where: {
                email: email
            }
        })

        if (existent.id) return res.status(500).json('Message Error: Email in use')

        const passwordHash = await encrypt(password)

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: passwordHash
            }
        })

        if (!newUser.id) {
            return res.status(500).json('Message Error: User not create')
        } else {
            res.status(201).send(`User created correctly with Id: ${newUser.insertId}`)
        }

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Register failed')
    }

}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const existent = await prisma.user.findMany({
            where: {
                email: email
            }
        })

        if (!existent.length) return res.status(500).json('Message Error: Email do not exist, please register')

        const isCorrectPassword = await verified(password, existent[0].password)
        if (!isCorrectPassword) return res.status(500).json('Message Error: Password incorrect')

        const token = generateToken(existent[0].id)
        const data = {
            id: existent[0].id,
            name: existent[0].name,
            email: existent[0].email,
            token
        }

        res.send(data)
    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Login failed')
    }
}