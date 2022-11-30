const defaultState:storeInterface = {
    cards: [],
    centerPosition: [51.505, -0.09]
}

interface storeInterface {
    cards: any,
    centerPosition: number[];
}

interface actionType {
    type: string;
    payload: any;
}

const ADD_CARD = 'ADD_CARD';
const REMOVE_CARD = 'REMOVE_CARD';
const CHANGE_CENTER = 'CHANGE_CENTER';


export const filterReducer = (state = defaultState, action: actionType) => {
    switch (action.type){
        case ADD_CARD:
            return  {...state, cards: [...state.cards, action.payload]}
        case REMOVE_CARD:  
             return (state)
        case CHANGE_CENTER:
            return{...state, centerPosition: [action.payload]}
        default:
            return state;
    }
}