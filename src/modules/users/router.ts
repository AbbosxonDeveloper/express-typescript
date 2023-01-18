import {Router} from 'express'
import controller from './controller'

const router = Router()

router.get('/users', controller.Users)
router.get('/users/:user_id', controller.User)
router.post('/users/create', controller.Create)
router.patch('/users/update/:user_id' , controller.Update)
router.delete('/users/delete/:user_id' , controller.Delete)

export default router