import { ADD_MODEL, CHANGE_CATEGORY, GET_MODEL_LIST } from "../types";

export const addModelToOrder = (model) => {
    return { type: ADD_MODEL, payload: model };
};

export const getModelListFromServer = (modelList) => {
    return { type: GET_MODEL_LIST, payload: modelList };
};

export const changeCategory = (category) => {
    return { type: CHANGE_CATEGORY, payload: category };
};
