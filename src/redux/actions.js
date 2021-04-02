import {
    CHANGE_CHOOSING_FILTER,
    CHANGE_COMPLETED_STAGE,
    CHANGE_CURRENT_STAGE,
    FILTER_MODELS,
    SELECT_MODEL,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
    SWITCH_LANGUAGE,
} from "./types";

export function switchLanguage() {
    return (dispatch, getState) => {
        let currentLanguage = getState().language.currentLanguage;
        currentLanguage = (currentLanguage === "Eng" && "Рус") || "Eng";
        dispatch({ type: SWITCH_LANGUAGE, payload: currentLanguage });
    };
}

export function changeCurrentStage(stage) {
    return (dispatch) => {
        dispatch({ type: CHANGE_CURRENT_STAGE, payload: stage });
    };
}

export function setSelectedCity(city) {
    return (dispatch) => {
        dispatch({ type: SET_SELECTED_CITY, payload: city });
    };
}

export function setSelectedPoint(point) {
    return (dispatch) => {
        dispatch({ type: SET_SELECTED_POINT, payload: point });
    };
}

export function changeCompletedStage(stage) {
    return (dispatch) => {
        dispatch({ type: CHANGE_COMPLETED_STAGE, payload: stage });
    };
}

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
    return (dispatch) => {
        dispatch({ type: SELECT_MODEL, payload: model });
    };
}
