export const useAPI: typeof useFetch = (request, opts) => {
  const headers = useRequestHeaders()

  const _reqT = typeof request === 'function'
    ? request()
    : unref(request);
  const newRequest = `/api${unref(_reqT)}`

  return useFetch(newRequest, {
    headers,
    ...opts,
  })
}
