export const useAPI: typeof useFetch = (request, opts) => {
  const headers = useRequestHeaders()
  const { $fetch } = useRequestEvent()

  // append /api to the request
  const _reqT = typeof request === 'function'
    ? request()
    : unref(request);
  const newRequest = `https://${headers.host ?? ''}/api${unref(_reqT)}`

  return useFetch(newRequest, {
    headers,
    ...opts,
    $fetch
  })
}
