import { ADD_MODEL, CHANGE_CATEGORY, GET_MODEL_LIST } from "../types";

const initialState = {
    modelList: [],
    category: "any",
    selectedModel: null,
};

export const model = (state = initialState, action) => {
    switch (action.type) {
        case GET_MODEL_LIST:
            return { ...state, modelList: action.payload };
        case CHANGE_CATEGORY:
            return { ...state, modelList: [], category: action.payload };
        case ADD_MODEL:
            return { ...state, selectedModel: action.payload };
        default:
            return state;
    }
};
