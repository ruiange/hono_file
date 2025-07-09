import { sign } from 'hono/jwt'
import type { Env } from 'hono'

export const createJwt = async (payload: Record<string, any>, env: Env): Promise<string> => {
  const secret = env.JWT_SECRET || 'your-secret-key'
  console.log('secret', secret)
  return await sign(payload, secret)
}
