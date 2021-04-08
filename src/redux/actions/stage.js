import { NEXT_STAGE, SET_COMPLETED_STAGE, SET_STAGE } from "../types";

export function nextStage() {
    return (dispatch, getState) => {
        const currentStage = getState().stage.stage;
        const nextStage = currentStage + 1;
        dispatch({ type: NEXT_STAGE, payload: nextStage });
    };
}

export function setStage(stage) {
    return (dispatch) => {
        dispatch({ type: SET_STAGE, payload: stage });
    };
}

export function setCompletedStage(stage) {
    return (dispatch) => {
        dispatch({ type: SET_COMPLETED_STAGE, payload: stage });
    };
}
