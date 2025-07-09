import { Hono } from 'hono'
import userRoute from './module/user.route'

const apiRoute = new Hono()
apiRoute.get('/hello', (c) => c.json({ message: '你好 Vue!' }))
apiRoute.route('/users', userRoute)

export default apiRoute
