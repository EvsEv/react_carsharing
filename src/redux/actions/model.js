import {
    FILTER_MODELS,
    SELECT_COLOR,
    SELECT_MODEL,
    SET_COMPLETED_STAGE,
    SET_COMPLETE_MODEL,
    SET_INCOMPLETE_ADDPARAMS,
    SET_INCOMPLETE_MODEL,
} from "../types";

export function filterModels(filter) {
    return (dispatch, getState) => {
        const modelState = getState().model;
        modelState.choosingFilter = filter;
        let filteredModels =
            modelState.choosingFilter === "All"
                ? modelState.allModels
                : modelState.allModels.filter(
                      (model) =>
                          model.categoryId.name === modelState.choosingFilter
                  );
        dispatch({ type: FILTER_MODELS, payload: filteredModels });
    };
}

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
