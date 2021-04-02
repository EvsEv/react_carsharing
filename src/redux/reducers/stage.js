import { CHANGE_COMPLETED_STAGE, CHANGE_CURRENT_STAGE } from "../types";

const initialState = {
    currentStage: 1,
    completedStage: 0,
};

export const stage = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CURRENT_STAGE:
            return { ...state, currentStage: action.payload };
        case CHANGE_COMPLETED_STAGE:
            return { ...state, completedStage: action.payload };
        default:
            return state;
    }
};
