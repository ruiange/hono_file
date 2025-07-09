import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// API 路由
app.get('/api/hello', (c) => c.json({ message: '你好，TDesign Vue 3！' }))
app.get('/api/users', (c) =>
    c.json([
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },
        { id: 3, name: 'Carol', email: 'carol@example.com' },
    ])
)

// ✅ 静态资源托管（无须指定 root 路径，交给 Cloudflare 处理）
app.use('/assets/*', serveStatic())
app.use('/favicon.ico', serveStatic())

// ✅ Vue SPA 前端路由 fallback：history 模式下所有非 API/静态资源请求
app.get('*', serveStatic({ path: '/index.html' }))  // ⚠️ 注意这里是 `/index.html`

export default app
