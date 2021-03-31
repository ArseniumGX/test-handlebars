import { Request, Response, NextFunction } from "express"

class About{
    show = (req: Request, res: Response, next: NextFunction) => {
        res.status(200)
        res.render('about', {})
    }
}

export default new About