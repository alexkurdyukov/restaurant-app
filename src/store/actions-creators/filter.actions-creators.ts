import { FETCH_DATA, FILTER_CARDS, RESET_FILTERS } from './../actions/filter.actions';
import { hotelDataTypes } from './../../types/types';
import { hotelType } from '../../types/types';
import { ADD_CARD, REMOVE_CARD } from '../actions/filter.actions';

export const fetchData = (hotels: hotelDataTypes) => ({
    type: FETCH_DATA,
    payload:hotels
  });

export const addCard = (hotel: hotelType) => ({
    type: ADD_CARD,
    payload:hotel
  });
  
export const removeCard = (id: number) => ({
  type: REMOVE_CARD,
  payload: id
})

export const filterCards = (id: number) => ({
    type: FILTER_CARDS,
    payload: id,
  })

  export const resetFilters = () => ({
    type: RESET_FILTERS
  })