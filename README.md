
#React源码学习


##1,React.createElement

    `编译工具（例如webpack，vite等）通过babel将JSX语法编译成浏览器可执行的React.createElement方法，返回一个虚拟dom。
    虚拟dom就是一个对象：{
                            ref: 获取真是dom的,
                            key: 做diff算法的,
                            type: 区别是一个元素，class组件，function组件等，
                            props: {
                                children: 子元素，
                                ...别的props属性
                            }
                        }
    react文件夹下就是大致createElement的实现思路
`

##2，ReactDom.render

    `ReactDom.render主要就是将虚拟dom转换成真实的dom，然后插入到对应的dom节点上。
    里面有一个createDom方法，通过不同的type类型生成真实的dom，然后通过children，递归将真实的dom插入到对应的节点上。`

