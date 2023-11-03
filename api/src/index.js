import express from "express";
import cors from 'cors'
import "dotenv/config"

import routes from './routes/index.routes.js'

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.json())

app.use(cors())

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server run listening on port ${PORT}`)
})