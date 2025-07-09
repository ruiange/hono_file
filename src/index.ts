import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// 优先处理 API 路由
app.get('/api/hello', (c) => c.json({ message: '你好，TDesign Vue 3！' }))

app.get('/api/users', (c) =>
    c.json([
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Carol', email: 'carol@example.com' },
    ])
)

// 静态资源服务
app.use('/assets/*', serveStatic({ root: './dist' }))
app.use('/favicon.ico', serveStatic({ path: './dist/favicon.ico' }))
app.use('/index.html', serveStatic({ path: './dist/index.html' }))

// Vue SPA fallback：所有非 API 非静态资源请求都返回 index.html
app.get('*', serveStatic({ path: './dist/index.html' }))

export default app
