import { NEXT_STAGE, SET_COMPLETED_STAGE, SET_STAGE } from "../types";

const initialState = {
    stage: 1,
    completedStage: 0,
};

export const stage = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAGE:
            return { ...state, stage: action.payload };
        case SET_COMPLETED_STAGE:
            return { ...state, completedStage: action.payload };
        default:
            return state;
    }
};
