import { selectCity } from "../actionCreators/location";

export const dispatchCity = (city) => {
    return (dispatch) => dispatch(selectCity(city));
};
