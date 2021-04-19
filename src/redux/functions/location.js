import { fetchData } from "../../assets/api/fetchData";
import {
    addCityToOrder,
    addPointToOrder,
    getCityListFromServer,
    getPointListFromServer,
} from "../actionCreators/location";

// export const dispatchCity = (city) => {
//     return (dispatch) => dispatch(selectCity(city));
// };

export const getCityList = () => {
    return async (dispatch) => {
        const cityList = await fetchData("city");
        dispatch(getCityListFromServer(cityList));
    };
};

export const getPointList = () => {
    return async (dispatch) => {
        const pointList = await fetchData("point");
        dispatch(getPointListFromServer(pointList));
    };
};

export const addCity = (city) => {
    return (dispatch) => dispatch(addCityToOrder(city));
};

export const addPoint = (point) => {
    return (dispatch) => dispatch(addPointToOrder(point));
};
