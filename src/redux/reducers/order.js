import { ADD_LOCATION, CHANGE_STAGE } from "../types";

const initialState = {
    stage: 1,
    city: "",
    point: "",
    model: "Tesla",
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
        case CHANGE_STAGE:
            return {
                ...state,
                stage: action.payload,
            };
        default:
            return state;
    }
};
