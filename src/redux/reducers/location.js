import { CHOOSING_POINT, CURRENT_CITY } from "../types";

const initialState = {
    currentCity: "Ульяновск",
    choosingPoint: "Нариманова, 42",
    loading: false,
};

export const location = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_CITY:
            return { ...state, currentCity: action.payload };
        case CHOOSING_POINT:
            return { ...state, choosingPoint: action.payload };
        default:
            return state;
    }
};
