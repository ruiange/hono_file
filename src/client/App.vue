<template>
  <t-layout>
    <t-header>
      <t-head-menu theme="light" value="/" @change="(v) => router.push(v)">
        <t-menu-item value="/">首页</t-menu-item>
        <t-menu-item value="/table">用户表格</t-menu-item>
      </t-head-menu>
    </t-header>
    <t-content class="p-4">
      <router-view />
    </t-content>
  </t-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style>
.p-4 { padding: 1rem; }
</style>
