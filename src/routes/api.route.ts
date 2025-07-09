import { Hono } from 'hono'
import userRoute from './module/user.route'

const apiRoute = new Hono()

apiRoute.route('/users', userRoute)

export default apiRoute
