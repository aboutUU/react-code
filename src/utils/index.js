/*
 *@description:
 * @author wayne
 * @date 2022-11-08 14:41
*/


import {REACT_TEXT} from "../constant";

export const toObject = (element) => {
    if(typeof element === 'string' || typeof  element === 'number'){
        return {type: REACT_TEXT, content: element}
    }else{
        return element
    }
}