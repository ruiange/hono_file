import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  email: text('email').unique(),
  open_id: text('open_id').unique(),
  avatar: text('avatar'),
  password_hash: text('password_hash').notNull(),
  created_at: text('created_at').default('CURRENT_TIMESTAMP')
}) 