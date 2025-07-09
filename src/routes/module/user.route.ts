import { Hono } from 'hono'

const userRoute = new Hono()

userRoute.get('/', (c) =>
  c.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ])
)

export default userRoute
