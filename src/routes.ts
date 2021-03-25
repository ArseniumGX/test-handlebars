import { Router } from 'express'
import userController from './controllers/usersController'

const router = Router()

router.use(userController.middleware)
router.get('/', userController.show)
router.post('/', userController.create)
router.put('/', userController.update)
router.delete('/', userController.delete)


export default router