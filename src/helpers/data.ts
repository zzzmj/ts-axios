import { isPlainObject } from './utils'

export function transformRequest(data: any) {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export function transformResponse(data: any) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (err) {}
  }
  return data
}
