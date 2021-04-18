import {
    CHANGE_CATEGORY,
    GET_MODEL_LIST,
    SET_CHOOSING_CATEGORY,
    SET_COMPLETE_MODEL,
    SET_INCOMPLETE_MODEL,
} from "../types";

const initialState = {
    modelList: [],
    choosingCategory: null,
    completed: false,
    //
    category: "any",
};

export const model = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSING_CATEGORY:
            return { ...state, choosingCategory: action.payload };
        case SET_COMPLETE_MODEL:
            return { ...state, completed: true };
        case SET_INCOMPLETE_MODEL:
            return { ...state, completed: false };
        //
        case GET_MODEL_LIST:
            return { ...state, modelList: action.payload };
        case CHANGE_CATEGORY:
            return { ...state, modelList: [], category: action.payload };
        default:
            return state;
    }
};
