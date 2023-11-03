import { verifyToken } from "../utils/jwt.handler.js";

export const checkJwt = (req, res, next) => {
    try {
        const jwtByUser = req.headers.authorization || ''
        const jwtToken = jwtByUser.split(' ').pop()
        const jwtTokenVerified = verifyToken(jwtToken)

        if (!jwtTokenVerified) res.status(500).json('Message Error: Invalid signature')
        next()

    } catch (error) {
        console.error(error)
        res.status(401).json(`Message Error: Invalid session, Detail: ${error.message}`)
    }
}