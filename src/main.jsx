import React from './react'
import ReactDOM from './react-dom';
import './index.css'


const element = React.createElement('div', {style: {height: '500px', background: 'red',fontSize: '36px', color: 'white'}}, 'react源码学习', React.createElement('h1', {style: {color: 'green', fontSize: '24px'}}, 'test'))
console.log('=======:', element);


ReactDOM.render(element, document.getElementById('root'));

// ReactDOM.createRoot(document.getElementById('root')).render(
//     element
// )
