import { Request, Response } from 'express'

class Home{
    
    show = (req: Request, res: Response) => {
        res.status(200)
        res.render('home', {})
    }

}

export default new Home