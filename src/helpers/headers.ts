import { isPlainObject } from './utils'

function normalizeHeaderName(headers: any, normalizeName: string) {
  if (!headers) return

  Object.keys(headers).forEach(name => {
    if (name !== normalizeName && name.toUpperCase === normalizeName.toUpperCase) {
      headers[normalizeName] = headers[name]
      delete headers[name]
    }
  })
}

// 将headers['content-type'] => headers['Content-Type']
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')
  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}

// 将字符串形式的headers解析成json格式
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if (!headers) {
    return parsed
  }

  headers.split('\r\n').forEach(line => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (!key) {
      return
    }
    if (val) {
      val = val.trim()
    }
    parsed[key] = val
  })

  return parsed
}
