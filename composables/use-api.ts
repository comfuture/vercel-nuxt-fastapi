export const useAPI: typeof useFetch = (request, opts) => {
  const headers = useRequestHeaders()

  // append /api to the request
  // on server, we need to prepend the host from the request headers
  const base = process.server? `https://${headers.host}` ?? '' : ''
  const _reqT = typeof request === 'function'
    ? request()
    : unref(request);
  const newRequest = `${base}/api${unref(_reqT)}`

  return useFetch(newRequest, {
    headers,  // pass all request headers
    ...opts,
  })
}
