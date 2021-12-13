import { Request, Response } from 'express'
import { HydratedDocument } from 'mongoose'
import Article from '../models/article'
import {Article as ArticleType} from '../types/Article'
import { CustomResponse, Error, } from '../types/Responses'

const addArticle = async (req: Request, res:Response)
                      :Promise<HydratedDocument<ArticleType>|CustomResponse<Error>> => {
  try {
    const post: HydratedDocument<ArticleType> = new Article({...req.body.post})
    await post.save()
    return post
  } catch {
    return res.status(400).json({
      message: 'Could not save post. Try again.'
    })
  }
}

export { addArticle }