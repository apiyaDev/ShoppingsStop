import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import groceryItems from '../data/groceryItems.json';

export default function ShoppingBag(state = [], action) {

    switch (action.type) {
        case ADD_GROCERY:
            let ShoppingBag = [...state, addToBag(action.id)];
            return ShoppingBag;
        case REMOVE_GROCERY:
            ShoppingBag = state.filter(item => item.id !== action.id);
            return ShoppingBag;   
        default:
            return state;
    }

}

const addToBag = (id) => {
    let item = groceryItems.find((item)=>item.id == id);
    return item;
}
