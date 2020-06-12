import React from "react";
function ListItem(props) {
    const itemValue = props.itemValue;
    return (<li>{itemValue}</li>);
}
export default ListItem;