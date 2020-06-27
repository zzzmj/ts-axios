import axios from '../../src/index'

axios({
  method: 'get',
  url: '/simple/get',
  params: {
    a: 1,
    b: 2
  }
})

axios({
  method: 'post',
  url: '/simple/post',
  data: {
    a: 1,
    b: 2
  }
})

const arr = new Array([1, 2, 3])
axios({
  method: 'post',
  url: '/simple/post',
  data: arr
})

