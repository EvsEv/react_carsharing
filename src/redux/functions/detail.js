import { addColorToOrder } from "../actionCreators/detail";

export const addColor = (color) => {
    return (dispatch) => dispatch(addColorToOrder(color));
};
