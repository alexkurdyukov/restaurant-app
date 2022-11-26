import { legacy_createStore } from "redux";

const defaultState:storeInterface = {
    cards: []
}

interface storeInterface {
    cards: any
}

interface actionType {
    type: string;
    payload: string | number;
}

const reducer = (state = defaultState, action: actionType) => {
    switch (action.type){
        case 'ADD_CARD':
            return  {...state, cards: [...state.cards, action.payload]}
        case 'REMOVE_CARD':  
             return (state)
        default:
            return state;
    }
}


export const store = legacy_createStore(reducer)