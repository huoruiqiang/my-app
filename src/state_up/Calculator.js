import React from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class Calculator extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.state = {temperature: ''};
    // }
    //
    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }

    render() {
        // const temperature = this.state.temperature;
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f" />
            </div>
        );
    }
}
export default Calculator;