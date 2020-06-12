import React from "react";
import ListItem from "./ListItem";
function NumberList(props) {
    // const numbers = this.props.numbers;
    const numbers = props.numbers;
    //如果没有stable id，则使用index作为id
    const listItems = numbers.map((number, index) => (<ListItem itemValue={number * 2}/>));
    return (<ul>{listItems}</ul>)
}
export default NumberList;