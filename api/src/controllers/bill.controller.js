import { prisma } from '../db.js'

export const getAllBills = async (req, res) => {
    try {
        const response = await prisma.bill.findMany()

        if (!response.length > 0) return res.status(404).json('Message Error: There are no bills yet')
        res.json(response)
    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Load bills failed, try again')
    }
}

export const getBill = async (req, res) => {
    try {
        const { id } = req.params

        const bill = await prisma.bill.findMany({
            where: {
                idFactura: +id,
            }
        })

        if (!bill.length > 0) return res.status(404).json('Message Error: Bill not found')

        res.json(bill)

    } catch (error) {
        console.error(error)
        res.status(500).json('Message Error: Load bill failed, try again')
    }
}