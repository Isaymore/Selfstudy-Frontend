const data = {
    name: '星爷'
}
console.log(data)

// 处理数据
function handle(data) {
    // 获取box元素
    let box = document.querySelector('.box')
    box.innerHTML = data.name
}

handle(data)