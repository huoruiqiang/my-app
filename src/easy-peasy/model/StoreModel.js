import React from "react";
import ProductModel from "./ProductsModel";
import basketModel from "./BasketModel";
import {createStore} from "easy-peasy";

const storeModel = {
    products:ProductModel,
    basketModel
};
export default storeModel;