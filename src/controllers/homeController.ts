import { Request, Response } from 'express'

class Users
{
    show = (req: Request, res: Response):void => {
        res.status(200)
        res.render('home', {})
    }

    create = (req: Request, res: Response) => {
        const body: object = req.body
        res.status(201)
        res.json(body)
        console.log(body)
    }

    update = (req: Request, res: Response) => {

    }

    delete = (req: Request, res: Response) => {

    }
}

export default new Users