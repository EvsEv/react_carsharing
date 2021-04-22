import { fetchData } from "../../assets/api/fetchData";
import {
    addCityToOrder,
    addPointToOrder,
    getCityListFromServer,
    getPointListFromServer,
} from "../actionCreators/location";

export const getCityList = () => {
    return async (dispatch) => {
        const cityList = await fetchData("city");
        const updatedCityList = cityList.map((item) => {
            const response = fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${item.name}.json?access_token=pk.eyJ1IjoiZXZzZXYiLCJhIjoiY2tucm81ZGExMHYzMjJxbno5eHoxeGljYSJ9.uZ8-ZK6lUrTsPgV2eKOlsw`
            )
                .then((res) => res.json())
                .then((json) => ({
                    id: item.id,
                    name: item.name,
                    latitude: json.features[0].center[1],
                    longitude: json.features[0].center[0],
                    boxArea: json.features[0].bbox,
                }));

            return response;
        });
        Promise.all(updatedCityList).then((item) =>
            dispatch(getCityListFromServer(item))
        );
    };
};

export const getPointList = () => {
    return async (dispatch, getState) => {
        const pointList = await fetchData("point");
        const { cityId } = getState().order;

        const updatedList = pointList.map((point) => {
            const address = `${cityId.name}, ${point.address}`;
            const coordinates = fetch(
                `http://search.maps.sputnik.ru/search?q=${address}`
            )
                .then((res) => res.json())
                .then((json) => ({
                    id: point.id,
                    address: point.address,
                    name: point.name,
                    coordinate: [
                        json.result[0].position.lat,
                        json.result[0].position.lon,
                    ],
                    cityId: point.cityId,
                }));

            return coordinates;
        });
        Promise.all(updatedList).then((item) =>
            dispatch(getPointListFromServer(item))
        );
    };
};

export const addCity = (city) => {
    return (dispatch) => dispatch(addCityToOrder(city));
};

export const addPoint = (point, city) => {
    return (dispatch) => dispatch(addPointToOrder(point, city));
};
