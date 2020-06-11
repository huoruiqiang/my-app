import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Router from './test_router/router/router';

import * as serviceWorker from './serviceWorker';
//1、my-app入口
// ReactDOM.render(<Router/>, document.getElementById('root'));

//2、默认的 creat-app 示例
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



//3、单页测试
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));

//4、计时器例子
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);


//5、react元素为用户自定义组件时 自定义组件必须以大写字母开头
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
// }
// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );

//6.自定义一个可以多次渲染 Welcome 组件的 MultiWelcome 组件
// function Welcome(props) {
//     return <h1>Hello, {props.name} + '先生的年龄为:', {props.age}</h1>;
// }
// function MultiWelcome(props) {
//     return (<div>
//         <Welcome name = "张三" age = "18"/>
//         <Welcome name = "王五" age = "22"/>
//         <Welcome name = "赵柳" age = "10"/>
//         <Welcome name = "李四" age = "19"/>
//     </div>);
// }
// ReactDOM.render(<MultiWelcome/>, document.getElementById('root'));


//7、计时器组件例子
// function Clock(props) {
//     return (
//         <div>
//             <h1>Hello, world! hah</h1>
//             <h2>It is {props.date.toLocaleTimeString()}.</h2>
//         </div>
//     );
// }
//
// function tick() {
//     ReactDOM.render(
//         <Clock date={new Date()} />,
//         document.getElementById('root')
//     );
// }
// setInterval(tick, 1000);

//8、函数组件转化成 class组件实现计时器，计时器自行更新自己的状态
//继承React.Component
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         //初始化state
//         this.state = {
//             date : new Date()
//         };
//     }
// //添加一个空的render()方法
//     render() {
//         //定义函数体
//         return (<div>
//             <h1>Hello, world!</h1>
//             <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//         </div>);
//     }
//
//     tick() {
//         this.setState({
//             date : new Date()
//         })
//     }
//
//     //组件已经被渲染到 DOM 中后运行
//     componentDidMount() {
//         this.timerID = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
// }
//
// function ClocksApp() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
//
// }
// ReactDOM.render(<ClocksApp />, document.getElementById('root'));






//二、React的事件处理

//2.1阻止默认的行为
// function ActionLink() {
//     function handleLinkClick(e) {
//         //阻止
//         // e.preventDefault();
//         console.log("9999")
//     }
//     return (<a href="https://www.baidu.com/" onClick={handleLinkClick}> click me</a>);
// }
//


// ReactDOM.render(<ActionLink />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
