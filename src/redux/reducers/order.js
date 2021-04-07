import { SELECT_COLOR, SELECT_MODEL } from "../types";

const initialState = {
    city: "",
    point: "",
    model: "",
    color: "Any",
    dateFrom: "",
    dateTo: "",
    addServices: [],
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MODEL:
            return {
                ...state,
                model: action.payload,
            };
        case SELECT_COLOR:
            return { ...state, color: action.payload };
        default:
            return state;
    }
};
