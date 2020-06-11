import React from "react";

//使用&&运算符和expression
function MailBox(props) {
    const unReadMessages = props.unReadMessages;
    return (<div>
        <h1>hello !</h1>
        {
            unReadMessages.length > 0 &&
            <h2>You have {unReadMessages.length} unread messages </h2>
        }
    </div>);

}
export default MailBox;