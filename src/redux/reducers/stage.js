import { SET_STAGE } from "../types";

const initialState = {
    stage: 1,
};

export const stage = (state = initialState, action) => {
    switch (action.type) {
        case SET_STAGE:
            return { ...state, stage: action.payload };
        default:
            return state;
    }
};
