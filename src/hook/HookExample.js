import React, {useState} from "react";
function HookExample() {
    //声明一个新的叫做count的变量
    const [count, setCount] = useState(0);
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
