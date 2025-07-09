import { Hono } from 'hono'
import * as userController from '../../controllers/user.controller'

const userRoute = new Hono()

userRoute.get('/', (c) =>
  c.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
)

userRoute.post('/register', userController.register)
userRoute.post('/login', userController.login)

export default userRoute


