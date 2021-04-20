import { GET_CITY_LIST, GET_POINT_LIST } from "../types";

const initialState = {
    geolocation: "Ульяновск",
    cityList: null,
    pointList: null,
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case GET_CITY_LIST:
            return { ...state, cityList: action.payload };
        case GET_POINT_LIST:
            return { ...state, pointList: action.payload };
        default:
            return state;
    }
};
