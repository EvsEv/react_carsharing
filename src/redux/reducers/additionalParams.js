import {
    SET_COMPLETE_ADDPARAMS,
    SET_DATE_FROM,
    SET_DATE_TO,
    SET_DURATION,
    SET_INCOMPLETE_ADDPARAMS,
    SET_PRICE,
    SET_TARIFF,
} from "../types";

const initialState = {
    colors: [],
    dateFrom: "",
    dateTo: "",
    duration: "",
    tariff: "",
    price: "",
    completed: false,
};

export const additionalParams = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SET_DATE_TO:
            return { ...state, dateTo: action.payload };
        case SET_TARIFF:
            return { ...state, tariff: action.payload };
        case SET_DURATION:
            return { ...state, duration: action.payload };
        case SET_PRICE:
            return { ...state, price: action.payload };
        case SET_INCOMPLETE_ADDPARAMS:
            return { ...state, completed: false };
        case SET_COMPLETE_ADDPARAMS:
            return { ...state, completed: true };
        default:
            return state;
    }
};
