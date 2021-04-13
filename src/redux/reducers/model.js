import {
    SET_CHOOSING_CATEGORY,
    SET_COMPLETE_MODEL,
    SET_INCOMPLETE_MODEL,
} from "../types";

const initialState = {
    choosingCategory: "any",
    completed: false,
};

export const model = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSING_CATEGORY:
            return { ...state, choosingCategory: action.payload };
        case SET_COMPLETE_MODEL:
            return { ...state, completed: true };
        case SET_INCOMPLETE_MODEL:
            return { ...state, completed: false };
        default:
            return state;
    }
};
