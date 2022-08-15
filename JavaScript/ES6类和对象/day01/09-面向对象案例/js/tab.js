
// 声明全局变量，指向constructor的this 即实例对象
let that
// 抽象一个Tab类
class Tab {
    constructor(id) {
        that = this
        // 获取tabsbox
        this.tabsbox = document.querySelector(id)

        // 添加按钮
        this.add = this.tabsbox.querySelector('.tabadd')
        // 小li的父元素
        this.ul = this.tabsbox.querySelector('.fisrstnav ul')
        // section的父元素
        this.tabscon = this.tabsbox.querySelector('.tabscon')
        this.init()
    }
    // 动态添加元素，要先重新获取元素
    updateNode() {
        // 获取tab所有小li和每个小li对应的content
        this.lis = this.tabsbox.querySelectorAll('li')
        this.contents = this.tabsbox.querySelectorAll('section')
        // 删除按钮
        this.remove = this.tabsbox.querySelectorAll('.icon-guanbi')
        // tab标签
        this.spans = this.tabsbox.querySelectorAll('.fisrstnav span:first-child')
    }
    // 初始化:给相关元素注册点击事件
    init() {
        // 加载需要获取tab所有小li和每个小li对应的content
        this.updateNode()
        // console.log(this)
        // 添加
        // console.log(this)
        this.add.addEventListener('click', this.addTab)
        // for循环遍历注册点击事件 每一个小li
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i
            this.lis[i].addEventListener('click', this.toggleTab)
            this.remove[i].addEventListener('click', this.removeTab)
            this.spans[i].addEventListener('dblclick', this.editTab)
            this.contents[i].addEventListener('dblclick', this.editTab)
            // this.lis[i].onclick = this.toggleTab

        }
        // this.ul.addEventListener('click', function (e) {
        //     console.log(e.target, e.target.tagName)
        //     // console.log(this)
        //     if (e.target.tagName === 'LI') {
        //         this.toggleTab
        //     }

        // })
    }
    // 切换tab
    toggleTab() {
        // 注意：普通方法里面的this指向该方法的调用者this.lis[i]
        // console.log(this.index)
        // 使用排他思想
        that.clearClass()
        this.className = 'liactive'
        that.contents[this.index].className = 'conactive'
        // // tab选项移除和添加选中类
        // let liactive = document.querySelector('.liactive')
        // liactive.classList.remove('liactive')
        // 等效于this.className = 'liactive'
        // this.classList.add('liactive')   
        // // tab对应的内容content移除和添加选中类
        // let conactive = document.querySelector('.conactive')
        // conactive.classList.remove('conactive')
        // // console.log(that.contents[this.index])
        // 等效于that.contents[this.index].className = 'conactive'
        // that.contents[this.index].classList.add('conactive')
    }

    // tab选项和对应的内容移除选中类
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.contents[i].className = ''
        }
    }
    // 新增tab
    addTab() {
        // console.log(111)
        // 添加前，先清除选中类
        that.clearClass()
        // 创建tab选项和对应的内容content  即li和section
        var li = '<li class="liactive"><span>新标签</span><span class="iconfont icon-guanbi"></span></li>'
        var section = '<section class="conactive">新内容</section>'
        // console.log(this)
        // 解析li和section字符串为HTML元素，并插入元素内部的最后一个子节点之后
        that.ul.insertAdjacentHTML('beforeend', li)
        that.tabscon.insertAdjacentHTML('beforeend', section)
        // 添加后，需要重新获取小li和content，并注册点击事件
        that.init()
    }
    // 删除tab
    removeTab(e) {
        // 防止冒泡：点击关闭按钮，触发切换tab
        e.stopPropagation()
        var index = this.parentNode.index
        // console.log(index)
        // 根据index，删除小li和对应的content
        that.lis[index].remove()
        that.contents[index].remove()
        // 删除后，需要重新获取小li和content，并注册点击事件
        that.init()
        // 删除的不是被选中的小li和content（即当前存在被选中的小li和content），结束当前函数，原来被选中的小li的状态不变
        if (document.querySelector('.liactive')) {
            return
        }
        // 删除已选中的小li和content后，自动选中前一个：获取前一个小li并点击
        index--
        // 删除所有小li和content：index = -1， that.lis[index]返回undefined 为false 短路
        that.lis[index] && that.lis[index].click()

    }
    // 修改tab
    editTab() {
        // console.log(111)
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selecton.emply()
        // 获取原生的span值或section值
        var rawStr = this.innerHTML
        // console.log(this)
        // 新建一个文本输入框
        this.innerHTML = '<input type="text">'
        // 获取文本输入框：根据父元素span[i]获取子元素
        let input = this.children[0]
        input.value = rawStr
        // 选中input输入文本框的所有内容
        input.select()
        input.addEventListener('blur', function () {
            // console.log(this)
            // this指向文本输入框，parentNode获取父元素span[i]
            this.parentNode.innerHTML = this.value
        })
        // 按下enter键，也可以保存
        input.addEventListener('keyup', function (e) {
            // console.log(e.key)
            if (e.key === 'Enter') {
                // 调用表单失去焦点函数
                // input.blur()
                this.blur()
            }

        })
    }
}
// 实例化获得tab对象
var tab = new Tab('#tab')
