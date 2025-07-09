import { sign } from 'hono/jwt'

export async function createJwt(payload: Record<string, any>, secret: string): Promise<string> {
  return await sign(payload, secret)
}
