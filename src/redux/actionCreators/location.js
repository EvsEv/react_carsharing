import { ADD_CITY, ADD_POINT } from "../types";

export const addCityToOrder = (cityId) => {
    return { type: ADD_CITY, payload: cityId };
};

export const addPointToOrder = (pointId) => {
    return { type: ADD_POINT, payload: pointId };
};
