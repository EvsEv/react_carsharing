import { ADD_LOCATION } from "../types";

const initialState = {
    stage: 1,
    city: "",
    point: "",
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LOCATION:
            return {
                ...state,
                stage: state.stage + 1,
                city: action.payload.city,
                point: action.payload.point,
            };
        default:
            return state;
    }
};
