import * as userService from '../services/user.service'
import { createJwt } from '../utils/jwt.util'
import { Context } from 'hono'

export async function register(c: Context) {
  let body
  try {
    body = await c.req.json()
  } catch (e) {
    return c.json({ error: '请求体必须为合法 JSON' }, 400)
  }
  const { name, email, password } = body || {}
  if (!name || !email || !password) {
    return c.json({ error: '缺少参数' }, 400)
  }
  const exists = await userService.findUserByEmail(c.env.DB, email)
  if (exists) {
    return c.json({ error: '邮箱已注册' }, 400)
  }
  const password_hash = await userService.hashPassword(password)
  const user = await userService.createUser(c.env.DB, { name, email, password_hash })
  return c.json({ id: user.id, name: user.name, email: user.email })
}

export async function login(c: Context) {
  let body
  try {
    body = await c.req.json()
  } catch (e) {
    return c.json({ error: '请求体必须为合法 JSON' }, 400)
  }
  const { email, password } = body || {}
  if (!email || !password) {
    return c.json({ error: '缺少参数' }, 400)
  }
  const user = await userService.findUserByEmail(c.env.DB, email)
  if (!user) {
    return c.json({ error: '用户不存在' }, 400)
  }
  const valid = await userService.verifyPassword(password, user.password_hash)
  if (!valid) {
    return c.json({ error: '密码错误' }, 400)
  }
  const token = await createJwt({ id: user.id, name: user.name, email: user.email })
  return c.json({ token })
}
