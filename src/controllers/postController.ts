import { Request, Response } from 'express'
import { getMongoManager } from 'typeorm'
import { postController } from '.'
import { Post } from '../models/Post'

class Posts
{

    show = (req: Request, res: Response) => {
        res.status(200)
        res.render('postAdd', {})
    }

    add = async ( req: Request, res: Response ) => {
        const manager = getMongoManager()
        const post = new Post()
        post.title = req.body.title
        post.body = req.body.body
        await manager.save(post)
        res.status(201)
        res.redirect('/')
    }
}

export default new Posts