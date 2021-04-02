import { SET_SELECTED_CITY, SET_SELECTED_POINT } from "../types";

const initialState = {
    geolocation: "Ульяновск",
    selectedCity: "Ульяновск",
    selectedPoint: "",
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CITY:
            return { ...state, selectedCity: action.payload };
        case SET_SELECTED_POINT:
            return { ...state, selectedPoint: action.payload };
        default:
            return state;
    }
};
