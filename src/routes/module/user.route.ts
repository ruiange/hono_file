import { Hono } from 'hono'
import {loginUser, registerUser} from "../../controllers/user.controller";

const userRoute = new Hono()

userRoute.get('/', (c) =>
  c.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
)



userRoute.post('/register', registerUser)
userRoute.post('/login', loginUser)

export default userRoute


