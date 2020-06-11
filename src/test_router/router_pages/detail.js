//测试路由功能
import React from 'react';

//目标地址,通过a标签进行跳转
let forward = '#/'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href={forward}>回到home</a>
                <button onClick={() => {this.props.history.push('/')}}>通过函数跳转回home</button>
            </div>
        )
    }
}