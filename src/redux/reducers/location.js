import {
    SET_COMPLETE_LOCATION,
    SET_INCOMPLETE_LOCATION,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
} from "../types";

const initialState = {
    geolocation: "Ульяновск",
    selectedCity: "Ульяновск",
    selectedPoint: "",
    completed: false,
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_CITY:
            return { ...state, selectedCity: action.payload };
        case SET_SELECTED_POINT:
            return { ...state, selectedPoint: action.payload };
        case SET_COMPLETE_LOCATION:
            return { ...state, completed: true };
        case SET_INCOMPLETE_LOCATION:
            return { ...state, completed: false };
        default:
            return state;
    }
};
