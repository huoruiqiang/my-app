import React from "react";
import {createStore} from "easy-peasy";
// import storeModel from "../model/StoreModel";
import ProductModel from "../model/ProductsModel";
import basketModel from "../model/BasketModel";
//这种做法省去把storeModel抽成一个文件的过程了
const storeModel = {
    products:ProductModel,
    basketModel
};
const store = createStore(storeModel);
export default store;