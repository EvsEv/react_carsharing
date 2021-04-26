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
        const updatedList = pointList.map(async (point) => {
            const address = `${point.cityId?.name} ${
                point.address === "Нариманова 1, корп.2"
                    ? "проспект Нариманова 1 с2"
                    : point.address
            } `;
            // const coordinates = fetch(
            //     `https://api.opencagedata.com/geocode/v1/json?key=2c84412836ff4043ba8920e7ae47b47c&q=${address}`
            // )
            //     .then((res) => res.json())
            //     .then((json) => ({
            //         id: point.id,
            //         address: point.address,
            //         name: point.name,
            //         coordinate: [
            //             json.results[0].geometry.lat,
            //             json.results[0].geometry.lng,
            //         ],
            //         cityId: point.cityId,
            //     }));
            // return coordinates;
        });
        dispatch(getPointListFromServer(pointList));

        // Promise.allSettled(updatedList).then((item) => {
        //     const fullFilledPromise = item
        //         .filter((prom) => prom.status === "fulfilled")
        //         .map((fullfilled) => fullfilled.value)
        //         .filter((pointsWithCityId) => pointsWithCityId.cityId);
        //     dispatch(getPointListFromServer(fullFilledPromise));
        // });
    };
};

export const addCity = (city) => {
    return (dispatch) => dispatch(addCityToOrder(city));
};

export const addPoint = (point, city) => {
    return (dispatch) => dispatch(addPointToOrder(point, city));
};
