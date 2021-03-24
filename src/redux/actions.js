import { SWITCH_LANGUAGE } from "./types";

export function switchLanguage() {
    return (dispatch, getState) => {
        let currentLanguage = getState().language.currentLanguage;
        currentLanguage = (currentLanguage === "Eng" && "Рус") || "Eng";
        dispatch({ type: SWITCH_LANGUAGE, payload: currentLanguage });
    };
}
