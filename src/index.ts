import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// 1. API
app.get('/api/hello', c => c.json({ message: '你好，TDesign Vue 3！' }))
app.get('/api/users', c => c.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob',   email: 'bob@example.com'   },
    { id: 3, name: 'Carol', email: 'carol@example.com' }
]))

// 2. 前端资源与 SPA fallback
app.use('*', serveStatic({ root: '/', path: '/index.html' }))
// ↑ 说明
//   • root:'/'  让 Worker 去 __STATIC_CONTENT__ 里按 manifest 查找 /assets/... 等文件
//   • path:'/index.html' 当 key 依旧找不到时（例如 /about），返回首页，交给 Vue Router

export default app
