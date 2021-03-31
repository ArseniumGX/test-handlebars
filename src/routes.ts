import { Router } from 'express'
import { middleware, homeController, postController } from './controllers'

const router = Router()

router.use(middleware.helpersDefinitions)

router.get('/', homeController.show)
router.get('/users/login', (req, res) => res.send('...'))
router.get('/post/add', postController.show)
router.post('/post/add', postController.add)

router.use('/:slug', middleware.notFound)


export default router