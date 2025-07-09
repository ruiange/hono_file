import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: 'file:.wrangler/state/v3/d1/miniflare-D1DatabaseObject/32cfe7f8-e9fe-4265-95d1-f9e65d8ebd83.sqlite'
  }
}) 