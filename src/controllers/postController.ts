import { Request, Response } from 'express'

class Posts
{

    show = (req: Request, res: Response) => {
        res.status(200)
        res.render('postAdd', {})
    }

    add = (req: Request, res: Response) => {
        
    }
}

export default new Posts