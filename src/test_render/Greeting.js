import React  from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
// function Greeting(props) {
//
//     const isLoginIn = props.isLoginIn;
//     if (isLoginIn) {
//         return <UserGreeting isLoginIn={isLoginIn} />;
//     } else {
//         return <GuestGreeting isLoginIn = {isLoginIn}/>;
//     }
// }



class Greeting extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isLoginIn : false
        }
    }

    handleClick = () => {
        //preState,表示先前的state
        this.setState((preState, nextProps) => ({
            // eslint-disable-next-line no-unused-expressions
            isLoginIn : !preState.isLoginIn
        }));
    }

    render() {
        const isLoginIn = this.state.isLoginIn;
        //改写为三目运算符
        return isLoginIn
            ? (<div><LogoutButton onClick={this.handleClick} isLoginIn={isLoginIn} /></div>)
            : (<div><LoginButton onClick={this.handleClick} isLoginIn={isLoginIn} /></div>);
        // if (isLoginIn) {
        //     return (<div><LogoutButton onClick={this.handleClick} isLoginIn={isLoginIn} /></div>);
        // } else {
        //     return (<div><LoginButton onClick={this.handleClick} isLoginIn={isLoginIn} /></div>);
        // }
    }
}
export default Greeting;