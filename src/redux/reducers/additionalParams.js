import {
    IS_VALID_PRICE,
    SELECT_DATE_FROM,
    SELECT_DATE_TO,
    SET_COMPLETE_ADDPARAMS,
    SET_DURATION,
    SET_INCOMPLETE_ADDPARAMS,
    SET_PRICE,
    SET_TARIFF,
    SET_TARIFF_PRICE,
} from "../types";

const initialState = {
    colors: [],
    dateFrom: "",
    dateTo: "",
    duration: "",
    tariff: "",
    tariffPrice: "",
    price: "",
    isValidPrice: "",
    completed: false,
};

export const additionalParams = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SELECT_DATE_TO:
            return { ...state, dateTo: action.payload };
        case SET_TARIFF:
            return { ...state, tariff: action.payload };
        case SET_DURATION:
            return { ...state, duration: action.payload };
        case SET_PRICE:
            return { ...state, price: action.payload };
        case SET_TARIFF_PRICE:
            return { ...state, tariffPrice: action.payload };
        case IS_VALID_PRICE:
            return { ...state, isValidPrice: action.payload };
        case SET_INCOMPLETE_ADDPARAMS:
            return { ...state, completed: false };
        case SET_COMPLETE_ADDPARAMS:
            return { ...state, completed: true };
        default:
            return state;
    }
};
