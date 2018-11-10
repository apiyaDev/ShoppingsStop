import { ADD_GROCERY, REMOVE_GROCERY } from '../actions';
import groceryItems from '../data/groceryItems.json';

export default function grocery(state = groceryItems, action) {

    switch (action.type) {
        case ADD_GROCERY:
            let grocery = state.filter(item => item.id !== action.id);
            return grocery;
        case REMOVE_GROCERY:
                grocery = [...state, addToGrocery(action.id)];
                return grocery;
        default:
            return state;
    }

}

const addToGrocery = (id) => {
    let item = groceryItems.find((item)=>item.id == id);
    return item;
}