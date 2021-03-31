import { Router } from 'express'
import {userController , middleware, aboutController, contactsController} from './controllers'

const router = Router()

router.use(middleware.helpersDefinitions)

router.get('/', userController.show)
router.get('/about', aboutController.show)
router.get('/contact', contactsController.show)

router.use('/:slug',middleware.notFound)


export default router