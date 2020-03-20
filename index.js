const Koa = require('koa');
const mock = require('./src/mock.js')
const app = new Koa();

app.use(async ctx => {
    let url = ctx.request.url;
    let methods = ctx.request.method;
    let data = mock.mock(url, methods);
    if (data) {
        ctx.body = data
    } else {
        ctx.response.status = 404
    }

})
app.on('error', err => {
    console.log('server error', err)
})
app.listen(3000, function() {
    console.log('服务已开启：localhot:3000')
})