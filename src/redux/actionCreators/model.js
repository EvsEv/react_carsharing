import { ADD_MODEL, CHANGE_CATEGORY, GET_MODEL_LIST } from "../types";

export const addModelToOrder = (model) => ({ type: ADD_MODEL, payload: model });

export const getModelListFromServer = (modelList) => ({
    type: GET_MODEL_LIST,
    payload: modelList,
});
export const changeCategory = (category) => ({
    type: CHANGE_CATEGORY,
    payload: category,
});

export const addModelToStore = (model) => ({ type: ADD_MODEL, payload: model });
