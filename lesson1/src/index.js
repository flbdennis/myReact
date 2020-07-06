import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import logo from './logo.svg'

let text = '这里是文本'

let name = {
    firstName: "Dennis", lastName: 'Fan'
}

let formatName = () => {
    return name.firstName + name.lastName
}

let greet = <h1>我是{formatName()}</h1>

let arr = [0, 1, 2, 3, 4, 5]

let jsx =
    <div>
        {/* 标签 */}
        {greet}

        {/* 文本 */}
        <p>{text}</p>

        {/* 方法 */}
        {formatName()}

        {/* 循环 */}
        <ul>
            {arr.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>

        {/* 属性 */}
        <img src={logo} className="logo" alt=""/>
    </div>

// 在 root 渲染 jsx
// ReactDOM.render(jsx, document.getElementById('root'));

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
