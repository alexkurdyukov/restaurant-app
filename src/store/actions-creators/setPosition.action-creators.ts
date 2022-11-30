import { hotelType } from "../../types/types";
import { ADD_CARD, CHANGE_CENTER, REMOVE_CARD } from "../actions/setPosition.actions";

export const addCard = (hotel: hotelType) => ({
    type: ADD_CARD,
    payload:hotel
  });
  
export const removeCard = (id: number) => ({
  type: REMOVE_CARD,
  payload: id
})

export const changeCenter = (hotelPosition: number[]) => ({
    type: CHANGE_CENTER,
    payload: hotelPosition
})