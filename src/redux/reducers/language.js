import { SWITCH_LANGUAGE } from "../types";

const initialState = {
    currentLanguage: "Eng",
    loading: false,
};

export const language = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_LANGUAGE:
            return { ...state, currentLanguage: action.payload };
        default:
            return state;
    }
};
