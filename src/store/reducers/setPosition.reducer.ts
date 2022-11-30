import { ADD_CARD, CHANGE_CENTER, REMOVE_CARD } from "../actions/setPosition.actions";
import {storeInterface, actionType, hotelType} from '../../types/types'

const defaultState:storeInterface = {
    cards: [],
    centerPosition: [51.505, -0.09]
}

export const setPositionReducer = (state = defaultState, action: actionType) => {
    switch (action.type){
        case ADD_CARD:
            return  {...state, cards: [...state.cards, action.payload]}
        case REMOVE_CARD:  
             return {...state, cards: state.cards.filter((card:hotelType) => card.result_object.location_id !== action.payload)}
        case CHANGE_CENTER:
            return{...state, centerPosition: [...action.payload]}
        default:
            return state;
    }
}