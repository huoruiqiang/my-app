import React  from "react";
function GuestGreeting(props) {
    console.log(props.isLoginIn)
    return <h1>Plese sign in</h1>;
}

function LoginButton(props) {
    return (<div>
        <GuestGreeting isLoginIn={props.isLoginIn}/>
        <button onClick={props.onClick}>Sign in</button>
    </div>);
}
export default LoginButton;
