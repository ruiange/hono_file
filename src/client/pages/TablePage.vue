<template>
  <t-card title="用户列表">
    <t-table :data="users" :columns="columns" row-key="id" bordered stripe/>
  </t-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { TdTableProps } from 'tdesign-vue-next'

interface User {
  id: number
  name: string
  email: string
}

const users = ref<User[]>([])
const columns: TdTableProps['columns'] = [
  { colKey: 'id', title: 'ID', width: 80 },
  { colKey: 'name', title: '姓名' },
  { colKey: 'email', title: '邮箱' },
]

onMounted(async () => {
  const res = await fetch('/api/users')
  users.value = await res.json()
})
</script>
