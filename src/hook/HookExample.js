import React, {useState, useEffect} from "react";
function HookExample() {
    //声明一个新的叫做count的变量
    const [count, setCount] = useState(0);
    useEffect(() => {
        //相当于 componentDidMount 和 componentDidUpdate
        document.title = 'You clicked ' + count + 'times!';
    });
    return (
        <div>
            <p>
                You clicked {count} times!
            </p>
            <button onClick={() => {
                setCount(count + 1);
            }}>
                Click me
            </button>
        </div>
    );
}
export default HookExample;
