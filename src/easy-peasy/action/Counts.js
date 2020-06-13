import {useStoreActions, useStoreState} from "easy-peasy";
import React from "react";
function Counts() {
    const addAction = useStoreActions(actions => actions.addCounts);
    const count = useStoreState(state => state.count);
    return (
        <div>
            <button onClick={() => {
                addAction(10);
            }}>
                {count}
            </button>
        </div>
    );
}
export default Counts;