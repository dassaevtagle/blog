import { Request, Response } from 'express'
import { HydratedDocument } from 'mongoose'
import Article from '../models/article'
import {Article as ArticleType} from '../types/Article'
import { CustomResponse, Error, } from '../types/Responses'

const addArticle = async (req: Request, res:Response)
                      :Promise<HydratedDocument<ArticleType>|CustomResponse<Error>> => {
  try {
    const postAdded: ArticleType = req.body.post
    const post: HydratedDocument<ArticleType> = new Article(postAdded)
    await post.save()
    return post
  } catch {
    return res.status(400).json({
      message: 'Could not save post. Try again.'
    })
  }
}

export { addArticle }