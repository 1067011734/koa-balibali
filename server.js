// const Koa = require('koa')
// const path = require('path')
// const static = require('koa-static')
// const app = new Koa()
 
// //设置静态资源的路径 
// const staticPath = './public'
 
// app.use(static(
//   path.join( __dirname,  staticPath)
// ))

// app.use( async ( ctx ) => {
//   ctx.body = 'hello world'
// })
 
// app.listen(8880, () => {
//   console.log('server is starting at port 8880')
// })
const path = require('path')
const Koa = require('koa');
const app = new Koa();
const route = require('koa-route');
const serve = require('koa-static');

// 1.主页静态网页 把静态页统一放到public中管理
const home   = serve(path.join(__dirname)+'/public/');
// 2.hello接口
const hello = ctx => {
  ctx.response.body = 'Hello World';
};

// 3.分配路由
app.use(home); 
app.use(route.get('/', hello));
app.listen(8880);