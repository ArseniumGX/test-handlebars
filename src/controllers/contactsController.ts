import { Request, Response, NextFunction } from "express"

class Contacts{
    show = (req: Request, res: Response, next: NextFunction) => {
        res.status(200)
        res.render('contacts', {})
    }
}

export default new Contacts