import React  from "react";
function UserGreeting(props) {
    console.log(props.isLoginIn);
    return <h1>welcome back! </h1>;
}

function GuestGreeting(props) {
    console.log(props.isLoginIn)
    return <h1>Plese sign in</h1>;
}

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
        }))
    }

    render() {
        const isLoginIn = this.state.isLoginIn;

        if (isLoginIn) {
            return (<div>
                <UserGreeting isLoginIn={isLoginIn}/>
                <button onClick={this.handleClick}>Sign out</button>
            </div>);
        } else {
            return (<div>
                <GuestGreeting isLoginIn={isLoginIn}/>
                <button onClick={this.handleClick}>Sign in</button>
            </div>);
        }
    }
}
export default Greeting;