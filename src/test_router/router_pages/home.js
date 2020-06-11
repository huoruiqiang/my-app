//测试路由功能
import React from 'react';

//目标地址,通过a标签进行跳转
let target = '#/detail';

// const detailRouterOnClick = () => {
//考虑如何将onClick方法抽出来单独定义
// }

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <a href={target}>去detail</a>
                <button onClick={() => this.props.history.push('detail')}>通过函数跳转到detail页面</button>
            </div>
        )
    }
}