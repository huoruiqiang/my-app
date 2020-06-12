import React from "react";
function Ul(props) {
    // const numbers = this.props.numbers;
    const numbers = props.numbers;
    //如果没有stable id，则使用index作为id
    const listItems = numbers.map((number, index) => (<li key={index}>{number * 2}</li>));
    return (<ul>{listItems}</ul>)
}
export default Ul;