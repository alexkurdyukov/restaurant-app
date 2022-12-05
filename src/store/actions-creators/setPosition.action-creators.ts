import {CHANGE_CENTER } from "../actions/setPosition.actions";

export const changeCenter = (hotelPosition: number[]) => ({
    type: CHANGE_CENTER,
    payload: hotelPosition
})