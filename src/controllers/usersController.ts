import { Request, Response, NextFunction } from 'express'
import helpers from '../helpers'

class Users
{
    private name: string = "Name"
    private age: number = 0
    private email: string = "exemple@domain.com"
    private phone: string = "+55 99 99999-9999"

    show = (req: Request, res: Response):void => {
        res.status(200)
        res.render('index', {
            name: this.name,
            email: this.email,
            age: this.age,
            phone: this.phone
        })
    }

    create = (req: Request, res: Response) => {
        const body: object = req.body
        this.name = body.name
        this.email = body.email
        this.age = body.age
        this.phone = body.phone

        res.status(201)
        res.json(body)
        console.log(body)
        }

    update = (req: Request, res: Response) => {

    }

    delete = (req: Request, res: Response) => {

    }

    middleware = (req: Request, res: Response, next:NextFunction) => {
        res.locals.h = helpers
        next()
    }

}

export default new Users