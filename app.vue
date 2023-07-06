<script setup lang="ts">
type Data = {
  message: string
}
const route = useRoute()
const { data } = await useAPI<Data>(route.fullPath)
</script>
<template>
  <div>
    Message from server: {{ data?.message }}
  </div>
</template>
