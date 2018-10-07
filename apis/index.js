const {app,router} = require('../config/setting')
router.get('/', (ctx, next) => {
  ctx.body = 'Hello World!';
})
app.use(router.routes());
app.use(router.allowedMethods())