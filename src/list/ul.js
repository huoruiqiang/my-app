import React from "react";
function Ul() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => (<li>{number * 2}</li>));
    return (<ul>{listItems}</ul>)

}
export default Ul;