const { router } = require('./setting')
// console.info(router)
const createApi = function (url) {
  return function(callBack){
    router.post(url, callBack)
  }
}
module.exports={
  createApi,
}