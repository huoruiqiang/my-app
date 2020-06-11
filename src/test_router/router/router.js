import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import hashHistory  from "../history";
import Home from '../router_pages/home';
import Detail from '../router_pages/detail';

//测试路由功能
const BasicRoute = () => (
    <HashRouter history={hashHistory}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);
export default BasicRoute;