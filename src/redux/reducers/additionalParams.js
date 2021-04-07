import { SELECT_COLOR, SET_DATE_FROM, SET_DATE_TO } from "../types";

const initialState = {
    colors: [],
    dateFrom: "",
    dateTo: "",
    tariff: "",
    services: [],
};

export const additionalParams = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SET_DATE_TO:
            return { ...state, dateTo: action.payload };
        default:
            return state;
    }
};
