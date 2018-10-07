const { router } = require('./setting')
const createApi = function (url) {
  return function(callBack){
    router.get(url, callBack)
  }
}
module.exports={
  createApi,
}