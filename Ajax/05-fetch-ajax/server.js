// 1.引入express
const { response } = require('express')
const express = require('express')
// 2.创建应用对象
const app = express()
// 3、创建路由规则
// request：对请求报文的封装
// response：对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('hello ajax get请求')
})

app.all('/server', (request, response) => {
    // 设置响应头，设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许自定义请求头
    response.setHeader('Access-Control-Allow-Headers', '*')
    // 设置响应体
    response.send('hello ajax post请求')
})

// 发送ajax post请求
app.all('/json-server', (request, response) => {
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
app.get('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('解决IE缓存问题1')
})

// 超时和网络异常提示
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        response.send('超时')
    }, 3000)

})

// axios服务
app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('hello axios get请求')
})

// fetch服务
app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    const data = { name: '星爷' }
    response.send(JSON.stringify(data))
})
// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已启动,8000 端口监听中...')
})