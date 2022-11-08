/*
 *@description:
 * @author wayne
 * @date 2022-11-08 13:57
*/


import {toObject} from "./utils";

function createElement(type, config, children) {

    let key = null, ref = null;
    if(config){
        key = config.key || null;
        ref = config.ref || null;
        delete config.key;
        delete config.ref;
    }

    const props = {...config};
    if(arguments.length > 3){
        props.children = Array.prototype.slice.call(arguments, 2).map(toObject);
    }else if(arguments.length === 3){
        props.children = toObject(children);
    }

    return {
        key,
        ref,
        type,
        props
    }

}

const React = {
    createElement
};


export default React;






