import { SELECT_COLOR } from "../types";

const initialState = {
    colors: [],
    dateFrom: "",
    dateTo: "",
    tariff: "",
    services: [],
};

export const additionalParams = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
