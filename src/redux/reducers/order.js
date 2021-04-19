import {
    SELECT_DATE_FROM,
    SELECT_DATE_TO,
    SET_DURATION,
    SET_TARIFF,
    TOGGLE_SERVICE,
    CALCULATE_PRICE,
    ADD_CITY,
    ADD_POINT,
    ADD_MODEL,
    ADD_COLOR,
} from "../types";

const initialState = {
    dateFrom: "",
    dateTo: "",
    duration: "",
    tariff: "",
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    //
    cityId: null,
    pointId: null,
    carId: null,
    color: null,
    price: 0,
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SELECT_DATE_TO:
            return { ...state, dateTo: action.payload };
        case SET_TARIFF:
            return { ...state, tariff: action.payload };
        case SET_DURATION: {
            return { ...state, duration: action.payload };
        }
        case CALCULATE_PRICE:
            return { ...state, price: action.payload };
        case TOGGLE_SERVICE:
            state[action.service] = !state[action.service];
            return { ...state };

        //
        case ADD_CITY:
            return {
                ...state,
                cityId: action.payload,
                pointId: null,
                carId: null,
                color: null,
            };
        case ADD_POINT:
            return {
                ...state,
                pointId: action.payload,
                cityId: action.payload ? action.payload.cityId : state.cityId,
            };
        case ADD_MODEL:
            return {
                ...state,
                color: null,
                carId: action.payload,
            };
        case ADD_COLOR:
            return { ...state, color: action.payload };
        default:
            return state;
    }
};
