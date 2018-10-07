const path = require('path')
const serve = require('koa-static')
const {app} = require('./config/setting')
require('./apis')
require('./pages')



// 1.主页静态网页 把静态页统一放到public中管理
const static = serve(path.join(__dirname) + '/public/');
app.use(static);

app.listen(8880);
console.info('端口:8880')