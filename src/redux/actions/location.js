import { addCityToOrder, addPointToOrder } from "../actionCreators/location";
import {
    SET_COMPLETE_LOCATION,
    SET_INCOMPLETE_LOCATION,
    SET_SELECTED_CITY,
    SET_SELECTED_POINT,
} from "../types";

export function setSelectedCity(city) {
    return (dispatch, getState) => {
        dispatch({ type: SET_SELECTED_CITY, payload: city });
        const location = getState().location;
        location.selectedCity === "" || location.selectedPoint === ""
            ? dispatch({ type: SET_INCOMPLETE_LOCATION })
            : dispatch({ type: SET_COMPLETE_LOCATION });
    };
}

export function setSelectedPoint(point) {
    return (dispatch, getState) => {
        dispatch({ type: SET_SELECTED_POINT, payload: point });
        const location = getState().location;
        location.selectedCity === "" || location.selectedPoint === ""
            ? dispatch({ type: SET_INCOMPLETE_LOCATION })
            : dispatch({ type: SET_COMPLETE_LOCATION });
    };
}

//

export const addCity = (cityId) => {
    return (dispatch) => dispatch(addCityToOrder(cityId));
};

export const addPoint = (pointId) => {
    return (dispatch) => dispatch(addPointToOrder(pointId));
};
