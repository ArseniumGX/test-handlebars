import { Request, Response, NextFunction } from 'express'
import helpers from '../helpers'

class Middlewares{
    
    helpersDefinitions = (req: Request, res: Response, next:NextFunction) => {
        res.locals.h = helpers
        next()
    }

    notFound = (req: Request, res: Response, next:NextFunction) => {
        let slug = req.params.slug
        console.log(slug)
        res.status(404)
        res.render('404', {
            slug
        })
    }
}

export default new Middlewares