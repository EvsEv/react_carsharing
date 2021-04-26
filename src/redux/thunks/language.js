import { switchLanguageToStore } from "../actionCreators/language";

export const switchLanguage = () => {
    return (dispatch, getState) => {
        const currentLanguage = getState().language.currentLanguage;
        const updatedLanguage = (currentLanguage === "Eng" && "Рус") || "Eng";
        dispatch(switchLanguageToStore(updatedLanguage));
    };
};
