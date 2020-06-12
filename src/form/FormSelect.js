import React from "react";
class FormSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value : 'grapefruit'
        };
    }
    handleChange = (e) => {
        this.setState({
            value : e.target.value
        });
    };

    handleSubmit = (e) => {
        console.log(this.state);
        alert('你喜欢的风味是: ' + this.state.value);
        e.preventDefault();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        选择你喜欢的风味:
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="grapefruit">葡萄柚</option>
                            <option value="lime">酸橙</option>
                            <option value="coconut">椰子</option>
                            <option value="mango">芒果</option>
                        </select>
                    </label>
                    <input type="submit" value="提交" />
                </form>
            </div>
        );
    }
}
export default FormSelect;