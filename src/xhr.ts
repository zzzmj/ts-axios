import { AxiosRequestConfig } from './types'

export function xhr(config: AxiosRequestConfig) {
  const { method = 'GET', url, data = null, headers } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, false)

  Object.keys(headers).forEach(name => {
    request.setRequestHeader(name, headers[name])
  })

  request.send(data)

  request.onreadystatechange = () => {
    console.log(request.responseText)
  }
}
