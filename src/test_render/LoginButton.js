import React  from "react";
function GuestGreeting(props) {
    console.log("当前状态:" + props.isLoginIn)
    return (
        <h1>
            Please sign in!
            The user is {props.isLoginIn ? 'currently' : 'not'} login!
        </h1>);
}

function LoginButton(props) {
    return (<div>
        <GuestGreeting isLoginIn={props.isLoginIn}/>
        <button onClick={props.onClick}>Sign in</button>
    </div>);
}
export default LoginButton;
