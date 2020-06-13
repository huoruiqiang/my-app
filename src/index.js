import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from "./easy-peasy/app/App";
import Router from './test_router/router/router';
import MailBox from "./test_render/unReadMessages";

//测试条件渲染引入
import Greeting from "./test_render/Greeting";

//列表 & key
import NumberList from "./list/NumberList";

import FormSelect from "./form/FormSelect";

import * as serviceWorker from './serviceWorker';
import Page from "./test_render/NotRender";
import Blog from "./list/Blog";
import EssayForm from "./form/EssayForm";
import Reservation from "./form/Reservation";
import Calculator from "./state_up/Calculator";
import HookExample from "./hook/HookExample";
import {StoreProvider} from "easy-peasy";
import store from "./easy-peasy/store/Store";
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

//2.2 自定义Toggle组件,Toggle组件会渲染一个让用户切换开关状态的按钮
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true};
//     }
//
//     handleClick() {
//         this.setState(state => ({
//             isToggleOn: !state.isToggleOn
//         }))
//     }
//
//     render() {
//         return (<button onClick={() => this.handleClick()}>{this.state.isToggleOn ? "ON" : "false"}</button>);
//     }
// }
// ReactDOM.render(<Toggle />, document.getElementById('root'));

//2.3 事件处理程序来传递参数 todo
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>


//3.1 通过登录和退出功能 测试条件渲染，三目运算符
// ReactDOM.render(<Greeting />, document.getElementById('root'));

//3.2 &&运算符和表达式一起使用,条件渲染
// const unReadMessages = ['a', 'b'];
// ReactDOM.render(<MailBox unReadMessages={unReadMessages}/>, document.getElementById('root'));

//3.3 通过return null；阻止组件的渲染或者隐藏已经渲染的组件
// ReactDOM.render(<Page />, document.getElementById('root'));


//4.1 列表 & key===>接收一个输入参数的
// const numbers = [1, 2, 3, 3, 4, 5];
// ReactDOM.render(<NumberList numbers={numbers}/>, document.getElementById('root'));

//4.2 数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一
// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
// ];
// ReactDOM.render(<Blog posts={posts}/>, document.getElementById('root'));

//5.1 form组件的使用---select  && class field方式传递 event参数及通过event.target.value获取值
// ReactDOM.render(<FormSelect />, document.getElementById('root'));

//5.3 form组件的使用 ----textarea
// ReactDOM.render(<EssayForm />, document.getElementById('root'));


//5.4 处理多个输入
// ReactDOM.render(<Reservation />, document.getElementById('root'));

//6.1组件状态提升
// ReactDOM.render(<Calculator />, document.getElementById('root'));

//7.1 hook的demo
// ReactDOM.render(<HookExample />, document.getElementById('root'));



//8.1 easy-peasy
ReactDOM.render(
    <StoreProvider store={store}>
    <App></App>
</StoreProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
