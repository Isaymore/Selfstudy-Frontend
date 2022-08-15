
// 立即执行函数
//  监控区域
; (function () {
    let tabs = document.querySelector('.tabs')
    // let a = tabs.children
    // console.log(a)
    for (let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].setAttribute('data-index', i)
    }
    tabs.addEventListener('click', function (e) {
        // console.dir(e.target)
        let active = document.querySelector('.tabs .active')
        active.className = ''
        e.target.className = 'active'
        // let a = document.querySelectorAll('.tabs a')
        // console.log(a)
        // console.log(Array.from(a))
        // console.log([...a])
        // console.log(Array.from(a).indexOf(e.target))
        // let index = [...document.querySelectorAll('.tabs a')].indexOf(e.target)
        let index = e.target.dataset.index
        // console.log(index)
        let contents = document.querySelectorAll('.content')
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.display = 'none'
            contents[index].style.display = 'block'
        }
    })
})()

    // 点位区域
    // 点位分布统计模块
    ; (function () {
        // 1. 实例化对象
        var myChart = echarts.init(document.querySelector(".pie"));
        // 2. 指定配置项和数据
        var option = {
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
            // 提示框组件
            tooltip: {
                // trigger 触发方式。  非轴图形，使用item的意思是放到数据对应图形上触发提示
                trigger: 'item',
                // 格式化提示内容：
                // a 代表series系列图表名称  
                // b 代表series数据名称 data 里面的name    
                // c 代表series数据值 data 里面的value   
                // d代表  当前数据/总数据的比例
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            // 控制图表
            series: [
                {
                    // 图表名称
                    name: '点位统计',
                    // 图表类型
                    type: 'pie',
                    // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
                    // 饼形图半径。 可以是像素。也可以是百分比（ 基于DOM容器大小）第一项是内半径，第二项是外半径（通过它可以实现饼形图大小）
                    radius: ['10%', '60%'],
                    // 图表中心位置 left 50%  top 50%  距离图表DOM容器
                    center: ['50%', '50%'],
                    // radius 半径模式，另外一种是 area 面积模式
                    roseType: 'radius',
                    // 文字调整
                    label: {
                        fontSize: 10
                    },
                    // 引导线调整
                    labelLine: {
                        // 连接扇形图线长
                        length: 6,
                        // 连接文字线长
                        length2: 8
                    },
                    // 数据集 value 数据的值 name 数据的名称
                    data: [
                        { value: 20, name: '云南' },
                        { value: 26, name: '北京' },
                        { value: 24, name: '山东' },
                        { value: 25, name: '河北' },
                        { value: 20, name: '江苏' },
                        { value: 25, name: '浙江' },
                        { value: 30, name: '四川' },
                        { value: 42, name: '湖北' }
                    ]
                }
            ]
        };

        // 3. 配置项和数据给我们的实例化对象
        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    })()

    // 用户统计模块
    ; (function () {
        let myChart = echarts.init(document.querySelector('.bar'))
        let item = {
            name: '',
            value: 1200,
            itemStyle: {
                color: '#254065'
            },
            emphasis: {
                // itemStyle: {
                //     color: '#254065'
                // },
                disabled: true
            },
            // 工具提示隐藏
            tooltip: {
                extraCssText: 'opacity:0'
            }
        }
        let option = {
            color: new echarts.graphic.LinearGradient(
                // (x1,y1) 点到点 (x2,y2) 之间进行渐变
                0, 0, 0, 1,
                [
                    { offset: 0, color: '#00fffb' }, // 0 起始颜色
                    { offset: 1, color: '#0061ce' }  // 1 结束颜色
                ]
            ),
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}"
            },
            grid: {
                top: '5%',
                left: '0%',
                right: '3%',
                bottom: '3%',
                containLabel: true,
                show: true,
                //grid 四条边框的颜色
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '用户统计',
                    type: 'bar',
                    barWidth: '60%',
                    data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener('resize', function () {
            myChart.resize()
        })
    })()

    // 销售模块
    ; (function () {
        let myChart = echarts.init(document.querySelector('.line'))
        let data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
                [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        }
        let option = {
            color: ['#00f2f1', 'blue'],
            // title: {
            //     text: 'Stacked Line'
            // },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data: ['预期销售额', '实际销售额'],
                textStyle: {
                    color: '#4c9bfd'
                },
                right: '2%'
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },

            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                },
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }

            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    stack: 'Total',
                    data: data.year[0],
                    smooth: true
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    // stack: 'Total',
                    data: data.year[1],
                    smooth: true
                }
            ]
        }
        myChart.setOption(option)
        // 点击切换年月周
        let caption = document.querySelector('.sales .caption')
        caption.addEventListener('click', function (e) {
            // 手动点击切换，需要记住点击的index
            index = [...as].indexOf(e.target)
            let active = document.querySelector('.sales .active')
            active.className = ''
            e.target.className = 'active'
            // 获取年月周data-type自定义属性值,作为data的key
            let type = e.target.dataset.type
            // console.log(type, typeof type)
            // console.log(data[type], typeof data[type])
            option.series[0].data = data[type][0]
            option.series[1].data = data[type][1]
            myChart.setOption(option)

        })
        // tab栏自动切换效果
        // 开启定时器每隔3s，自动让a触发点击事件即可
        let as = document.querySelectorAll('.sales .caption a')
        let index = 0
        let timer = window.setInterval(function () {
            index++
            if (index >= 4) {
                index = 0
            }
            as[index].click()
        }, 3000)
        // 鼠标经过sales，关闭定时器，离开开启定时器
        let sales = document.querySelector('.sales')
        sales.addEventListener('mouseenter', function () {
            window.clearInterval(timer)
        })
        sales.addEventListener('mouseleave', function () {
            timer = window.setInterval(function () {
                index++
                if (index >= 4) {
                    index = 0
                }
                as[index].click()
            }, 3000)
        })
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });

    })()

    // 销售渠道模块
    ; (function () {
        let myChart = echarts.init(document.querySelector('.radar'))
        // Schema:
        // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
        const dataBJ = [
            [90, 19, 56, 11, 34]

        ];

        const lineStyle = {
            width: 1,
            opacity: 0.5,
            color: '#fff'
        };
        let option = {
            tooltip: {
                show: true,
                // 控制提示框组件的显示位置
                position: ['60%', '10%'],
            },
            radar: {

                center: ['50%', '50%'],
                radius: '65%',
                splitNumber: 4,

                indicator: [
                    { name: '机场', max: 100, color: '#4c9bfd' },
                    { name: '商场', max: 100, color: '#4c9bfd' },
                    { name: '火车站', max: 100, color: '#4c9bfd' },
                    { name: '汽车站', max: 100, color: '#4c9bfd' },
                    { name: '地铁', max: 100, color: '#4c9bfd' }
                ],

                shape: 'circle',
                splitNumber: 4,
                axisName: {
                    color: 'rgb(238, 197, 102)'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: 'Beijing',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: '#fff'
                    },
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 10
                    },
                    areaStyle: {
                        color: 'rgba(238, 197, 102, 0.6)'
                    }
                },

            ]
        };
        myChart.setOption(option)
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })()
    // 销售季度模块
    ; (function () {
        let myChart = echarts.init(document.querySelector('.gauge'))
        let option = {

            series: [
                {
                    name: '销售季度',
                    type: 'pie',
                    radius: ['130%', '150%'],
                    center: ['48%', '80%'],
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                        }
                    },
                    hoverOffset: 0,
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                color: '#12274d'
                            }
                        },
                        {
                            value: 200,
                            itemStyle: {
                                color: 'transparent'
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    // (x1,y1) 点到点 (x2,y2) 之间进行渐变
                                    0, 0, 0, 1,
                                    [
                                        { offset: 0, color: '#00c9e0' }, // 0 起始颜色
                                        { offset: 1, color: '#005fc1' }  // 1 结束颜色
                                    ]
                                ),
                            }
                        },

                    ]
                }
            ]
        };
        myChart.setOption(option)
        // 当我们浏览器缩放的时候，图表也等比例缩放
        window.addEventListener("resize", function () {
            // 让我们的图表调用 resize这个方法
            myChart.resize();
        });
    })()

    // 热销榜单模块
    ; (function () {
        let hotData = [
            {
                city: '北京',  // 城市
                sales: '25, 179',  // 销售额
                flag: true, //  上升还是下降
                brands: [   //  品牌种类数据
                    { name: '可爱多', num: '9,086', flag: true },
                    { name: '娃哈哈', num: '8,341', flag: true },
                    { name: '喜之郎', num: '7,407', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '6,724', flag: false },
                    { name: '好多鱼', num: '2,170', flag: true },
                ]
            },
            {
                city: '河北',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '3,457', flag: false },
                    { name: '娃哈哈', num: '2,124', flag: true },
                    { name: '喜之郎', num: '8,907', flag: false },
                    { name: '八喜', num: '6,080', flag: true },
                    { name: '小洋人', num: '1,724', flag: false },
                    { name: '好多鱼', num: '1,170', flag: false },
                ]
            },
            {
                city: '上海',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '2,345', flag: true },
                    { name: '娃哈哈', num: '7,109', flag: true },
                    { name: '喜之郎', num: '3,701', flag: false },
                    { name: '八喜', num: '6,080', flag: false },
                    { name: '小洋人', num: '2,724', flag: false },
                    { name: '好多鱼', num: '2,998', flag: true },
                ]
            },
            {
                city: '江苏',
                sales: '23,252',
                flag: false,
                brands: [
                    { name: '可爱多', num: '2,156', flag: false },
                    { name: '娃哈哈', num: '2,456', flag: true },
                    { name: '喜之郎', num: '9,737', flag: true },
                    { name: '八喜', num: '2,080', flag: true },
                    { name: '小洋人', num: '8,724', flag: true },
                    { name: '好多鱼', num: '1,770', flag: false },
                ]
            },
            {
                city: '山东',
                sales: '20,760',
                flag: true,
                brands: [
                    { name: '可爱多', num: '9,567', flag: true },
                    { name: '娃哈哈', num: '2,345', flag: false },
                    { name: '喜之郎', num: '9,037', flag: false },
                    { name: '八喜', num: '1,080', flag: true },
                    { name: '小洋人', num: '4,724', flag: false },
                    { name: '好多鱼', num: '9,999', flag: true },
                ]
            }
        ]
        // 各省热榜
        // 获取父元素
        let sup = document.querySelector('.sup')
        hotData.forEach((currentValue, index) => {
            // 创建子元素li
            let li = document.createElement('li')
            // 给li添加内容
            li.innerHTML = `<span>${currentValue.city}</span> <span>${currentValue.sales} <s class=${currentValue.flag ? "icon-up" : "icon-down"}></s></span>`
            // 给父元素sup添加子元素
            sup.appendChild(li)
            // console.log(index)
            let lis = document.querySelectorAll('.sup li')
            // 默认第一个选中
            lis[0].className = 'active'
            // foreach的index刚好是lis的下标
            lis[index].addEventListener('mouseenter', function () {
                for (let i = 0; i < index + 1; i++) {
                    lis[i].className = ''
                }
                this.className = 'active'
                console.log(hotData[index].brands)
                // <li><span></span><span> <s class="icon-up"></s></span></li>
                // 进30日数据
                // 获取父元素
                let sub = document.querySelector('.sub')
                hotData[index].brands.forEach(currentValue => {

                    // 创建子元素li
                    let li = document.createElement('li')
                    li.innerHTML = `<span>${currentValue.name}</span>${currentValue.num}<span> <s class=${currentValue.flag ? "icon-up" : "icon-down"}></s></span>`
                    // 给父元素sub添加子元素
                    sub.appendChild(li)
                    // let lisSub = document.querySelectorAll('.sub li')
                    // console.log(lisSub)
                    // // 默认第一个选中
                    // lisSub[0].style.display = 'block'
                })

            })
        })
    })()

