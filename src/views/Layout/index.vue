<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'
onMounted(() => {
  useCategoryStore().getCategory()
})

</script>
<template>
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
<style scoped></style>