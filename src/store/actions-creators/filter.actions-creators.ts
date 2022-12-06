import {
	ADD_CARD,
	REMOVE_CARD,
	FETCH_DATA,
	FILTER_CARDS,
	RESET_FILTERS,
	CHANGE_RATING,
} from "./../actions/filter.actions";
import { hotelDataTypes } from "./../../types/types";
import { hotelType } from "../../types/types";

export const fetchData = (hotels: hotelDataTypes) => ({
	type: FETCH_DATA,
	payload: hotels,
});

export const addCard = (hotel: hotelType) => ({
	type: ADD_CARD,
	payload: hotel,
});

export const removeCard = (id: number) => ({
	type: REMOVE_CARD,
	payload: id,
});

export const changeRating = (rating: number) => ({
	type: CHANGE_RATING,
	payload: rating,
})

export const filterCards = () => ({
	type: FILTER_CARDS
});

export const resetFilters = () => ({
	type: RESET_FILTERS,
});
