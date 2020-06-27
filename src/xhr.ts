import { AxiosRequestConfig } from './types'

export function xhr(config: AxiosRequestConfig) {
  console.log('config', config)
  const { method = 'GET', url, data = null, params } = config
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, false)

  request.send(data)

  request.onreadystatechange = () => {
    console.log(request.responseText)
  }
}
