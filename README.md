# Nuxt + FastAPI deploy on Vercel

On Vercel, the `api` directory is automatically deployed as a serverless function.
And the `app` object in any python file in the `api` directory will treated as a asgi application.

On this template, `app/main.py` populates FastAPI application object. and rewrites all `/api(.*)` requests to `/api/main` serverless function.

On Nuxt, the `useFetch` composable fetches data from `/api/main` serverless function.
But if the url starts with `/`, `$fetch` helper try to call `/server/api/*.ts` eventHandlers instead of making http request.

`useAPI` composable is a wrapper of `useFetch` composable. It automatically adds `/api` prefix to the url.

## Live Demo

https://vercel-nuxt-fastapi.vercel.app/

## Deploy your own


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/comfuture/vercel-nuxt-fastapi&project-name=vercel-nuxt-fastapi&repository-name=vercel-nuxt-fastapi)

## Example

filename: server/api.py
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
async def greeting():
    return {"message": "Hello World"}
```

filename: pages/hello.vue
```vue
<script setup lang="ts">
const route = useRoute()
const { data } = useAPI<{ message: string }>(route.fullPath)
</script>
<template>
  <div>
    Greeting from server: {{ data?.message }}
  </div>
</template>
```

## OpenAPI Document

Of course, FastAPI provides OpenAPI document.

- https://vercel-nuxt-fastapi.vercel.app/api/docs
- https://vercel-nuxt-fastapi.vercel.app/api/redoc
