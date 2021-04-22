import { ADD_CITY, ADD_POINT, GET_CITY_LIST, GET_POINT_LIST } from "../types";

export const addCityToOrder = (cityId) => {
    return { type: ADD_CITY, payload: cityId };
};

export const addPointToOrder = (pointId, cityId) => {
    return { type: ADD_POINT, payload: pointId, city: cityId };
};

export const getCityListFromServer = (carList) => {
    return { type: GET_CITY_LIST, payload: carList };
};

export const getPointListFromServer = (pointList) => {
    return { type: GET_POINT_LIST, payload: pointList };
};
