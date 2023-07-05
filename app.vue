<script setup lang="ts">
type Data = {
  message: string
}
const { data } = useFetch<Data>('/api/')
</script>
<template>
  <div>
    Message from server: {{ data?.message }}
  </div>
</template>
