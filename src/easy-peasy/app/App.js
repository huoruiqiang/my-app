import React from "react";
import {useStoreState} from "easy-peasy";
import basketModel from "../model/BasketModel";

function App(){
    const count = useStoreState(state => state.basketModel.productIds.length);
    // const count = useStoreState(state => state.products.items.length);
    return (
        <div>
            {count}
        </div>
    );
}
export default App;