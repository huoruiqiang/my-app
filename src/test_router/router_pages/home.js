//测试路由功能
import React from 'react';

//目标地址,通过a标签进行跳转
let target = '#/detail';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <a href={target}>去detail</a>
            </div>
        )
    }
}