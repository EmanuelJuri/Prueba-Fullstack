import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

const { JWT_SECRET } = process.env

export const generateToken = (id) => {
    const jwt = sign({ id }, JWT_SECRET, { expiresIn: '2h' })
    return jwt
}

export const verifyToken = (jwtToken) => {
    const jwt = verify(jwtToken, JWT_SECRET)
    return jwt
}