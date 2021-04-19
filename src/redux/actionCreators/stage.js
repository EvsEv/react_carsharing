import { NEXT_STAGE } from "../types";

export const setNextStage = (stage) => {
    return { type: NEXT_STAGE, payload: stage };
};
