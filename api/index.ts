import { Request, Response } from "express"
import express from 'express'
import mongoose from 'mongoose'
import {default as articleRoutes} from './routes/article'

const app = express()

require('dotenv').config()

app.use(express.json())

mongoose
  .connect(process.env.MONGO_URI!) //Use "!" operator when even if it can be null, it won't
  .then(() => console.log('connected to DB'))

app.use('/article', articleRoutes)
app.get('/test', (req: Request, res: Response) => {
  res.send('Test successful')
})

export default {
  path: '/api',
  handler: app
}