// 解析url
export function buildUrl(url: string, params?: any): string {
  // 如果没传parmas
  if (!params) return url
  // 将params做成key=value的字符串形式，多个&拼接
  let p: string[] = []
  Object.keys(params).forEach((key, index) => {
    let value = params[key]

    // if (value.includes('#')) value = value.split('#')[0]
    p.push(`${key}=${value}`)
  })

  const serializedParams = p.join('&')

  if (url.includes('#')) {
    url = url.split('#')[0]
  }

  url += (url.includes('?') ? '&' : '?') + serializedParams

  return url
}
