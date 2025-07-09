import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  root: './src/client', // 保持你的项目结构
  build: {
    outDir: '../../dist', // 输出目录与 wrangler.toml 保持一致
    emptyOutDir: true,
  },
  base: '/', // ⭐️ 关键：确保路径为根目录（非常重要）
  server: {
    proxy: {
      '/api': 'http://localhost:8787',
    },
  },
})
