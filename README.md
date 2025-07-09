# Cloudflare Workers + Vue3 + TDesign 示例项目

## 项目简介

本项目是一个基于 [Cloudflare Workers](https://workers.cloudflare.com/)、[Vue 3](https://vuejs.org/)、[TDesign Vue Next](https://tdesign.tencent.com/vue-next/) 和 [Hono](https://hono.dev/) 的全栈示例，演示了如何在 Cloudflare 边缘环境下部署现代前后端分离应用。

- **前端**：使用 Vue 3 + TDesign 组件库，构建响应式 SPA。
- **后端**：基于 Hono 框架，运行于 Cloudflare Workers，提供 API 和静态资源服务。

---

## 技术栈

- Cloudflare Workers
- Hono (后端 API 框架)
- Vue 3 (前端框架)
- TDesign Vue Next (UI 组件库)
- Vite (前端构建工具)
- TypeScript
- Wrangler (Cloudflare Workers 部署工具)
- pnpm (包管理)

---

## 功能介绍

- 首页：欢迎页，支持调用后端 API 示例。
- 用户表格页：展示用户列表，数据来自后端 API。
- API 接口：
  - `/api/hello` 返回欢迎信息。
  - `/api/users` 返回用户列表。
- 前后端分离，支持 SPA 路由和静态资源托管。

---

## 目录结构

```
hono_file/
├── package.json           # 项目依赖与脚本
├── pnpm-lock.yaml         # pnpm 锁定文件
├── README.md              # 项目说明
├── src/
│   ├── client/            # 前端源码
│   │   ├── App.vue        # 根组件
│   │   ├── index.html     # 前端入口 HTML
│   │   ├── main.ts        # 前端入口 TS
│   │   ├── router.ts      # 路由配置
│   │   └── pages/         # 页面组件
│   │       ├── Home.vue   # 首页
│   │       └── TablePage.vue # 用户表格页
│   └── index.ts           # 后端入口（Hono 应用）
├── tsconfig.json          # TypeScript 配置
├── vite.config.ts         # Vite 配置
├── wrangler.toml          # Cloudflare Workers 配置
└── dist/                  # 前端构建产物（自动生成）
```

---

## 安装与本地开发

### 环境要求
- Node.js >= 20
- pnpm >= 9
- Wrangler >= 3

### 安装依赖
```bash
corepack enable # 推荐，自动管理 pnpm 版本
pnpm install
```

### 启动本地开发环境
```bash
# 启动前端和 Workers 后端（自动构建并热更新）
pnpm run dev
```
- 前端默认运行在 [http://localhost:5173](http://localhost:5173)
- 后端 API 由 wrangler 提供，端口为 8787，前端通过 `/api` 代理访问

---

## 构建与部署

### 构建前端
```bash
pnpm run build:client
```

### 部署到 Cloudflare Workers
```bash
pnpm run deploy
```
- 需提前配置好 wrangler 认证（`wrangler login`）和 Cloudflare 账户。
- 部署命令会自动构建前端并上传到 Cloudflare Workers。

---

## 主要页面与 API

- **首页** (`/`):
  - 展示欢迎信息
  - 按钮可调用 `/api/hello` 接口，显示后端返回内容
- **用户表格页** (`/table`):
  - 展示后端 `/api/users` 返回的用户列表

---

## 参考与致谢
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [Hono 框架](https://hono.dev/)
- [TDesign Vue Next](https://tdesign.tencent.com/vue-next/)
- [Vue 3 官方文档](https://vuejs.org/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)

---

如有问题欢迎提 Issue 或 PR！
