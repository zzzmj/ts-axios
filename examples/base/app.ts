import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  headers: {
    'content-type': 'application/json;charset=uft-8'
  },
  data: {
    a: 1,
    b: 2
  }
})

const paramsString = 'q=URLUtils.searchParams&topic=api'
const searchParams = new URLSearchParams(paramsString)

axios({
  method: 'post',
  url: '/base/post',
  data: searchParams
})
