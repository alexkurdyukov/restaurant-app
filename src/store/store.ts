import { legacy_createStore } from "redux";

const defaultState:storeInterface = {
    cards: Array<Object>,
    center: [51.505, -0.09]
}

interface storeInterface {
    cards: any,
    center: [number, number]
}

interface actionType {
    type: string;
    payload: any;
}

const reducer = (state = defaultState, action: actionType) => {
    switch (action.type){
        case 'ADD_CARD':
            return  {...state, cards: [...state.cards, action.payload]}
        case 'REMOVE_CARD':  
             return (state)
        // case 'CHANGE_CENTER':
        //     return{...state, center: [action.payload]}
        default:
            return state;
    }
}


export const store = legacy_createStore(reducer)