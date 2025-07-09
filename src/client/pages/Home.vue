<template>
  <t-card title="欢迎">
    <p>这是基于 Cloudflare Workers + Vue3 + TDesign 的示例项目。</p>
    <t-button theme="primary" @click="fetchMessage">调用接口啊</t-button>
    <p class="mt-2">{{ message }}</p>
  </t-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
const fetchMessage = async () => {
  const res = await fetch('/api/hello')
  const json = await res.json()
  message.value = json.message
}
</script>

<style>
.mt-2 { margin-top: 0.5rem; }
</style>
