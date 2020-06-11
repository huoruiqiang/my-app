import React from "react";
function Warning(props) {
    if (!props.showingWarn) {
        return null;
    }
    return (<div className="warning">Warning!</div>);
}
export default Warning;