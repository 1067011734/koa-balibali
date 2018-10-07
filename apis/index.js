const {app,router} = require('../config/setting')
app.use(router.routes())
//post请求响应，杜绝405
app.use(router.allowedMethods({
  throw: true,
}))