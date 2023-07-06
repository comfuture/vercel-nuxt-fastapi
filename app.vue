<script setup lang="ts">
import { useAPI } from '~/composables/use-api'

type Data = {
  message: string
}
const route = useRoute()
const { data } = await useAPI<Data>(route.fullPath)
</script>
<template>
  <div>
    serve from icn1
    Message from server: {{ data?.message }}
  </div>
</template>
