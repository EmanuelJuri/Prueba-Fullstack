import pkg from 'bcryptjs';
const { hash, compare } = pkg;

export const encrypt = async (password) => {
    const passwordHash = await hash(password, 10)
    return passwordHash
}

export const verified = async (password, passwordHash) => {
    const isCorrect = await compare(password, passwordHash)
    return isCorrect
}