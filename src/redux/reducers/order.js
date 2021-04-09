import {
    SELECT_COLOR,
    SELECT_MODEL,
    SET_DATE_FROM,
    SET_DATE_TO,
    SET_DURATION,
    SET_PRICE,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
    SET_SERVICES,
    SET_TARIFF,
} from "../types";

const initialState = {
    city: "Ульяновск",
    point: "",
    model: "",
    color: "Any",
    dateFrom: "",
    dateTo: "",
    duration: "",
    tariff: "",
    addServices: [],
    price: "",
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
        case SET_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SET_DATE_TO:
            return { ...state, dateTo: action.payload };
        case SET_TARIFF:
            return { ...state, tariff: action.payload };
        case SET_DURATION: {
            return { ...state, duration: action.payload };
        }
        case SET_PRICE: {
            return { ...state, price: action.payload };
        }
        case SET_SERVICES:
            return { ...state, addServices: action.payload };
        default:
            return state;
    }
};
