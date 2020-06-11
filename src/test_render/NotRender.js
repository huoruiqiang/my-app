import React from "react";
import Warning from "./Warning";
class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showingWarn : false
        }
    }
    handleClick = () => this.setState(preState => ({
        showingWarn : !preState.showingWarn
    }));
    render() {
        return (
            <div>
                <Warning showingWarn={this.state.showingWarn}/>
                <button onClick={this.handleClick}>{this.state.showingWarn ? 'showing' : 'hide'}</button>
            </div>
                );
    }
}
export default Page;