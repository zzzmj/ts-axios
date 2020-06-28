import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string) {
  if (!headers) return

  // 将headers['content-type'] => headers['Content-Type']
  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase === normalizeName.toUpperCase) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}
