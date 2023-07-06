export const useAPI: typeof useFetch = (request, opts) => {
  const headers = useRequestHeaders()
  const { $fetch } = useRequestEvent()

  // append /api to the request
  const base = process.server? `https://${headers.host}` ?? '' : ''
  const _reqT = typeof request === 'function'
    ? request()
    : unref(request);
  const newRequest = `${base}/api${unref(_reqT)}`

  return useFetch(newRequest, {
    headers,
    ...opts,
    $fetch: process.server ? $fetch : undefined
  })
}
