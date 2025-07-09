import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.get('/api/hello', (c) => c.json({ message: '你好，TDesign Vue 3！' }))

app.get('/api/users', (c) =>
  c.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Carol', email: 'carol@example.com' },
  ]),
)

// 静态资源托管
app.use('*', serveStatic())

export default app
