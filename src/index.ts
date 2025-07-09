import { Hono } from 'hono'
import apiRoute from './routes/api.route'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// 接口统一放在 /api 路由下
app.route('/api', apiRoute)

// 静态资源和 SPA fallback
app.use('*', serveStatic({ root: '/', path: '/index.html' }))

app.all('*', async (c, next) => {
    // 只处理浏览器导航请求（Accept: text/html）
    if (c.req.header('Accept')?.includes('text/html')) {
        return serveStatic({ root: '/', path: 'index.html' })(c, next)
    }
    // 让静态资源（.js/.css/png…）直接 404 → 资产层
    return c.notFound()
})

export default app
