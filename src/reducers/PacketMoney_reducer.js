import { ADD_PACKETMONEY, REMOVE_PACKETMONEY } from '../actions';
import groceryItems from '../data/groceryItems.json';


export default function packetmoney (state=100, action) {

    switch (action.type) {
        case ADD_PACKETMONEY:
            let itemOne = addToBag(action.id);
            let money = state + itemOne.cost;
            return money;
        case REMOVE_PACKETMONEY:
            let itemTwo = addToBag(action.id);
            let spend = state - itemTwo.cost;
            return spend;    
        default:
            return state;
    }

}

const addToBag = (id) => {
    let item = groceryItems.find(item=>item.id == id);
    return item;
}