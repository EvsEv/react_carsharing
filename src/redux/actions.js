import {
    ADD_LOCATION,
    CHANGE_STAGE,
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

export function changeStage(stage) {
    return (dispatch, getState) => {
        const order = getState().order;
        switch (stage) {
            case 1:
                order.model = "";
                break;

            default:
                break;
        }
        dispatch({ type: CHANGE_STAGE, payload: stage });
    };
}
