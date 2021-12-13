import {Schema, model} from 'mongoose'
import { Article } from '../types/Article'

const articleSchema = new Schema<Article>({
  content: String,
  title: String,
}, {timestamps: true})

export default model('Post', articleSchema)