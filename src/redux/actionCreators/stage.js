import { SET_STAGE } from "../types";

export const setStage = (stage) => {
    return { type: SET_STAGE, payload: stage };
};
