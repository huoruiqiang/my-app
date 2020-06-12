import React from "react";
class EssayForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            textAreaValue : ""
        }
    }

    handleSubmit = (e) => {
        alert("你输入的文本内容是:" + this.state.textAreaValue);
        e.preventDefault();
    };

    handleOnChange = (e) => {
        this.setState({
            textAreaValue : e.target.value
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        请输入一段文本:
                    </label>
                    <textarea value={this.state.textAreaValue} onChange={this.handleOnChange}>

                    </textarea>
                    <input type="submit" value="提交"/>
                </form>
            </div>
        );
    }
}
export default EssayForm;