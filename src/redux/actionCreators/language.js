import { SWITCH_LANGUAGE } from "../types";

export const switchLanguageToStore = (language) => ({
    type: SWITCH_LANGUAGE,
    payload: language,
});
