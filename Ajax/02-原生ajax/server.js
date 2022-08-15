// 1.引入express
const express = require('express')
// 2.创建应用对象
const app = express()
// 3、创建路由规则
// request：对请求报文的封装
// response：对响应报文的封装
app.get('/server', (require, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('hello ajax get请求')
})

app.all('/server', (require, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('hello ajax post请求')
})

// 发送ajax post请求
app.all('/json-server', (require, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许自定义请求体
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    // response.send('hello ajax json')
    let data = {
        name: '星爷',
        age: 17,
        gender: '男'
    }
    let jsonStr = JSON.stringify(data)
    console.log(jsonStr, typeof jsonStr)
    response.send(jsonStr)
})

// 解决IE缓存问题
app.get('/ie', (require, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('解决IE缓存问题1')
})

// 超时和网络异常提示
app.get('/delay', (require, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('超时')
    }, 3000)

})


// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动,8000 端口监听中...')
})