<script setup lang="ts">
type Data = {
  message: string
}
// const { data } = useFetch<Data>('/api/')

const data = ref<Data>({message: 'Hello from local'})
</script>
<template>
  <div>
    Message from server: {{ data?.message }}
  </div>
</template>
