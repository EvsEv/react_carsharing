import { ADD_COLOR } from "../types";

export const addColorToOrder = (color) => {
    return { type: ADD_COLOR, payload: color };
};
