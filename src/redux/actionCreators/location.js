import { ADD_CITY, ADD_POINT, GET_CITY_LIST, GET_POINT_LIST } from "../types";

export const addCityToOrder = (cityId) => ({ type: ADD_CITY, payload: cityId });

export const addPointToOrder = (pointId, cityId) => ({
    type: ADD_POINT,
    payload: pointId,
    city: cityId,
});

export const getCityListFromServer = (carList) => ({
    type: GET_CITY_LIST,
    payload: carList,
});

export const getPointListFromServer = (pointList) => ({
    type: GET_POINT_LIST,
    payload: pointList,
});
