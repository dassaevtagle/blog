import express from 'express'
const router = express.Router()

import { addArticle } from '../controllers/article'

router.post('/article', addArticle)

export default router