import { hotelType } from "../../types/types";
import { ADD_CARD, FETCH_DATA, FILTER_CARDS, REMOVE_CARD, RESET_FILTERS } from "../actions/filter.actions";

const defaultState: filteredStoreInterface = {
    data: [],
    favourites: [],
    rating: '5',
    filtredCards: []
}

interface filteredStoreInterface {
    data: any,
    filtredCards: [],
    favourites: Array<hotelType>,
    rating: string
}

interface filteredActionType {
    type: string;
    payload: any;
}

export const filterReducer = (state = defaultState, action: filteredActionType) => {
    switch (action.type){
        case FETCH_DATA:
            return {...state, data: action.payload}
        case ADD_CARD:
            return  {...state, favourites: [...state.favourites, action.payload]}
        case REMOVE_CARD:  
            return {...state, favourites: state.favourites.filter((card:hotelType) => card.result_object.location_id !== action.payload)}
        case FILTER_CARDS:
            return  {...state, rating: action.payload, filtredCards: state?.data?.filter((hotel:hotelType) => (Number(hotel?.result_object?.rating) >= Number(state.rating)))}
        case RESET_FILTERS:  
             return {...state, filtredCards: state.data}
        default:
            return state;
    }
}