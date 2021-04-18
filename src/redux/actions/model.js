import { fetchData } from "../../assets/api/fetchData";
import { getModelListFromServer } from "../actionCreators/model";
import { model } from "../reducers/model";
import {
    SELECT_COLOR,
    SELECT_MODEL,
    SET_CHOOSING_CATEGORY,
    SET_COMPLETE_MODEL,
    SET_INCOMPLETE_ADDPARAMS,
    SET_INCOMPLETE_MODEL,
} from "../types";

export const setChoosingCategory = (category) => {
    return (dispatch) => {
        dispatch({ type: SET_CHOOSING_CATEGORY, payload: category });
    };
};

export function selectModel(model) {
    return (dispatch, getState) => {
        getState().additionalParams.colors = model.colors;
        dispatch({ type: SELECT_MODEL, payload: model });
        dispatch({ type: SELECT_COLOR, payload: "" });
        dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
        const isCompleted = getState().order.model;
        isCompleted === ""
            ? dispatch({ type: SET_INCOMPLETE_MODEL })
            : dispatch({ type: SET_COMPLETE_MODEL });
    };
}

//
