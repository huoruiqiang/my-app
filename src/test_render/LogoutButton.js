import React from "react";

function UserGreeting(props) {
    console.log("当前状态:" + props.isLoginIn);
    return (
        <h1>
            welcome back!
            The user is {props.isLoginIn ? 'currently' : 'not'} login!
        </h1>)
        ;
}

function LogoutButton(props) {
    return (<div>
        <UserGreeting isLoginIn={props.isLoginIn}/>
        <button onClick={props.onClick}>Sign out</button>
    </div>);
}
export default LogoutButton;    