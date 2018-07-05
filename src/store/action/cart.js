import * as TYPES from "../action-types";
import {getCart} from "../../api/car"

let cart = {
    getCart() {
        return {
            type: TYPES.CART_ADD_NUM,
            getCart,
        }
    }
};

export default cart;



