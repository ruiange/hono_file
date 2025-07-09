import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// 接口统一放在 /api 路由下
const api = new Hono()

api.get('/hello', (c) => c.json({ message: '你好 Vue!' }))
api.get('/users', (c) =>
    c.json([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' }
    ])
)

app.route('/api', api)

// 静态资源和 SPA fallback
app.use('*', serveStatic({ root: '/', path: '/index.html' }))

export default app
