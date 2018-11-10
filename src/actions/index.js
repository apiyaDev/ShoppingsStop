export const ADD_GROCERY        = "ADD_GROCERY";
export const REMOVE_GROCERY     = "REMOVE_GROCERY";
export const ADD_PACKETMONEY    = "ADD_PACKETMONEY";
export const REMOVE_PACKETMONEY = "REMOVE_PACKETMONEY";

export function addGroceryById (id) {
    const action = {
        type: ADD_GROCERY,
        id
    }
    return action;
}

export function removeGroceryById(id) {
    const action = {
        type: REMOVE_GROCERY,
        id
    }
    return action;
}

export function addPacketMoney(id) {
    const action = {
        type: ADD_PACKETMONEY,
        id
    }
    return action;
}

export function removePacketMoney(id) {
    const action = {
        type: REMOVE_PACKETMONEY,
        id
    }
    return action;
}