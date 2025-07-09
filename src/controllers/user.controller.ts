import * as userService from '../services/user.service'
import { createJwt } from '../utils/jwt.util'
import { Context } from 'hono'
import { success, fail } from '../utils/response.util'
import { ERROR_CODES } from '../constants/error-codes'

const getErrorByKey = (key: string) => ERROR_CODES.find(e => e.key === key)!

export const register = async (c: Context) => {
  let body
  try {
    body = await c.req.json()
  } catch (e) {
    const err = getErrorByKey('INVALID_JSON')
    return c.json(fail(err.code, err.message))
  }
  const { name, email, password } = body || {}
  if (!name || !email || !password) {
    const err = getErrorByKey('MISSING_PARAMS')
    return c.json(fail(err.code, err.message))
  }
  const exists = await userService.findUserByEmail(c.env.DB, email)
  if (exists) {
    const err = getErrorByKey('EMAIL_EXISTS')
    return c.json(fail(err.code, err.message))
  }
  const password_hash = await userService.hashPassword(password)
  const user = await userService.createUser(c.env.DB, { name, email, password_hash })
  return c.json(success({ id: user.id, name: user.name, email: user.email }))
}

export const login = async (c: Context) => {
  let body
  try {
    body = await c.req.json()
  } catch (e) {
    const err = getErrorByKey('INVALID_JSON')
    return c.json(fail(err.code, err.message))
  }
  const { email, password } = body || {}
  if (!email || !password) {
    const err = getErrorByKey('MISSING_PARAMS')
    return c.json(fail(err.code, err.message))
  }
  const user = await userService.findUserByEmail(c.env.DB, email)
  if (!user) {
    const err = getErrorByKey('USER_NOT_FOUND')
    return c.json(fail(err.code, err.message))
  }
  const valid = await userService.verifyPassword(password, user.password_hash)
  if (!valid) {
    const err = getErrorByKey('PASSWORD_INCORRECT')
    return c.json(fail(err.code, err.message))
  }
  const token = await createJwt({ id: user.id, name: user.name, email: user.email }, c.env.JWT_SECRET)
  return c.json(success({ token }))
}
