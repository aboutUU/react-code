/*
 *@description:
 * @author wayne
 * @date 2022-11-08 15:07
*/


import {REACT_TEXT} from "./constant";

function render(vdom, container){
    mount(vdom, container)
}

function mount(vdom, container){
    //从虚拟dom转换成真是的dom
    const realDom = createDom(vdom);
    //将虚拟dom插入到节点中
    container.appendChild(realDom);
}

//生成真实的dom
function createDom(vdom){

    const { type, props, content} = vdom;
    //真实的dom
    let dom;
    //处理text类型
    if(type === REACT_TEXT){
        dom = document.createTextNode(content);
        //处理元素类型
    }else {
        dom = document.createElement(type);
    }

    if(props){
        //处理props
        changeProps(dom, {}, props);

        //处理children
        appendChildren(props.children, dom);
    }
    return dom
}

//将children添加到dom中
function appendChildren(children, dom){
    if(typeof children === 'object' && children.type){
        mount(children, dom);
    }else if(Array.isArray(children)){
        children.forEach(item => mount(item, dom));
    }
}

//处理props 要把children过滤掉，style需要遍历
function changeProps(dom, oldProps, newProps){
    if(newProps){
        for (const key in newProps){
            if(key === 'children'){
                continue
            }else if(key === 'style'){
                const styleObject = newProps[key];
                for(const key2 in styleObject){
                    dom[key][key2] = styleObject[key2];
                }
            }else{
                dom[key] = newProps[key];
            }
        }
    }

    if(oldProps){
        for(const key in oldProps){
            if(!newProps[key]){
                dom[key] = null;
            }
        }
    }

}

const ReactDom = {
    render
};

export default ReactDom;