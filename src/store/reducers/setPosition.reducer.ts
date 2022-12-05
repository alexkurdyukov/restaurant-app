import { CHANGE_CENTER} from "../actions/setPosition.actions";
import {storeInterface, actionType} from '../../types/types'

const defaultState:storeInterface = {
    centerPosition: [51.505, -0.09],
    cards: undefined
}

export const setPositionReducer = (state = defaultState, action: actionType) => {
    switch (action.type){  
        case CHANGE_CENTER:
            return{...state, centerPosition: [...action.payload]}
        default:
            return state;
    }
}