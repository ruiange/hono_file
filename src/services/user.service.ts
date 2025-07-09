import type {D1Database} from '@cloudflare/workers-types'
import {getDb} from '../db'
import {users} from '../db/schema'
import {eq} from 'drizzle-orm'

// 查找用户
export async function findUserByEmail(DB: D1Database, email: string) {
  const db = getDb(DB)
  return db.select().from(users).where(eq(users.email, email)).get();
}

// 创建用户
export async function createUser(DB: D1Database, { name, email, password_hash }: { name: string, email: string, password_hash: string }) {
  const db = getDb(DB)
  const result = await db.insert(users).values({ name, email, password_hash }).returning()
  return result[0]
}

// 密码 hash（SHA-256）
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('')
}

// 密码校验
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const hashed = await hashPassword(password)
  return hashed === hash
}
