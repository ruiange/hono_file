import { sign } from 'hono/jwt'

const SECRET = 'your-secret-key' // 生产环境请用环境变量

export async function createJwt(payload: Record<string, any>): Promise<string> {
  return await sign(payload, SECRET)
}
