import grocery  from './grocery_reducer';
import shoppingBag from './ShoppingBag_reducer';
import packetMoney from './PacketMoney_reducer';

import { combineReducers } from 'redux';

export default combineReducers ({
    grocery,
    shoppingBag,
    packetMoney
})