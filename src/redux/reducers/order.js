import {
    SELECT_COLOR,
    SELECT_MODEL,
    SELECT_DATE_FROM,
    SELECT_DATE_TO,
    SET_DURATION,
    SET_PRICE,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
    SET_TARIFF,
    TOGGLE_SERVICE,
    CALCULATE_PRICE,
    ADD_CITY,
    ADD_POINT,
    ADD_MODEL,
    ADD_COLOR,
} from "../types";

const initialState = {
    city: "Ульяновск",
    point: "",
    model: "",
    dateFrom: "",
    dateTo: "",
    duration: "",
    tariff: "",
    price: "",
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
    //
    cityId: null,
    pointId: null,
    carId: {},
    color: null,
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CITY:
            return { ...state, city: action.payload };
        case SET_SELECTED_POINT:
            return { ...state, point: action.payload };
        case SELECT_MODEL:
            return {
                ...state,
                model: action.payload,
            };
        case SELECT_COLOR:
            return { ...state, color: action.payload };
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
            return { ...state, cityId: action.payload, pointId: null };
        case ADD_POINT:
            return { ...state, pointId: action.payload };
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
