import express from "express"
// import postRouter from './routers/postRouter'
// @ts-ignore
import prisma from "./prisma"

const app = express()
app.use(express.json())
// app.use('/posts',postRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))