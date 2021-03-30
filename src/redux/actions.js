import {
    ADD_LOCATION,
    CHOOSING_POINT,
    CURRENT_CITY,
    SWITCH_LANGUAGE,
} from "./types";

export function switchLanguage() {
    return (dispatch, getState) => {
        let currentLanguage = getState().language.currentLanguage;
        currentLanguage = (currentLanguage === "Eng" && "Рус") || "Eng";
        dispatch({ type: SWITCH_LANGUAGE, payload: currentLanguage });
    };
}

export function choosingPoint(value) {
    return (dispatch) => {
        dispatch({ type: CHOOSING_POINT, payload: value });
    };
}

export function selectCity(value) {
    return (dispatch) => {
        dispatch({ type: CURRENT_CITY, payload: value });
    };
}

export function addLocation(city, point) {
    return (dispatch) => {
        dispatch({ type: ADD_LOCATION, payload: { city, point } });
    };
}
