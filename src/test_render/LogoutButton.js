import React from "react";

function UserGreeting(props) {
    console.log(props.isLoginIn);
    return <h1>welcome back! </h1>;
}

function LogoutButton(props) {
    return (<div>
        <UserGreeting isLoginIn={props.isLoginIn}/>
        <button onClick={props.onclick}>Sign out</button>
    </div>);
}
export default LogoutButton;