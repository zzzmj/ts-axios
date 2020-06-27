import { AxiosRequestConfig } from './types'
import { buildUrl } from './helpers/url'
import { xhr } from './xhr'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  console.log('yikaisconfig', config)
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

export default axios
