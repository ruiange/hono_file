import { Context } from 'hono'

const users = new Map<string, { password: string }>() // 模拟用户数据库

export const registerUser = async (c: Context) => {
    const { username, password } = await c.req.json()

    if (!username || !password) {
        return c.json({ error: '用户名和密码不能为空' }, 400)
    }

    if (users.has(username)) {
        return c.json({ error: '用户名已存在' }, 409)
    }

    users.set(username, { password })
    return c.json({ message: '注册成功' }, 201)
}

export const loginUser = async (c: Context) => {
    const { username, password } = await c.req.json()

    if (!username || !password) {
        return c.json({ error: '用户名和密码不能为空' }, 400)
    }

    const user = users.get(username)
    if (!user || user.password !== password) {
        return c.json({ error: '用户名或密码错误' }, 401)
    }

    return c.json({ message: '登录成功' })
}
