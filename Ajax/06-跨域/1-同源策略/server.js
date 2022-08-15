const express = require('express')
const app = express()
app.get('/home', (request, response) => {
    // 响应一个页面
    console.log(__dirname)
    response.sendFile(__dirname + '/index.html')

})
app.get('/data', (request, response) =>
    response.send('用户数据'))
// 4.监听端口启动服务
app.listen(9000, () => {
    console.log('服务已启动,9000 端口监听中...')
})

