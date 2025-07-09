import { Hono } from 'hono'
import apiRoute from './routes/api.route'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// 接口统一放在 /api 路由下
app.route('/api', apiRoute)

// 静态资源和 SPA fallback
app.use('*', serveStatic({ root: '/', path: '/index.html' }))

export default app
