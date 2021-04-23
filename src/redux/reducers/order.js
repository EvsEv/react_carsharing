import {
    TOGGLE_SERVICE,
    ADD_CITY,
    ADD_POINT,
    ADD_MODEL,
    ADD_COLOR,
    ADD_DATE_FROM,
    ADD_DATE_TO,
    ADD_DURATION,
    ADD_TARIFF,
    ADD_PRICE,
} from "../types";

const initialState = {
    cityId: {
        id: "5e26a128099b810b946c5d87",
        name: "Ульяновск",
        latitude: 54.31667,
        longitude: 48.36667,
        boxArea: [
            48.0558315006526,
            54.1387543653734,
            48.6924280426867,
            54.4215314857901,
        ],
    },
    pointId: null,
    carId: null,
    color: null,
    duration: null,
    fullDay: null,
    fullHour: null,
    dateFrom: null,
    dateTo: null,
    price: null,
    tariff: null,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CITY:
            return {
                ...state,
                cityId: action.payload,
                pointId: null,
                carId: null,
                color: null,
                dateFrom: null,
                dateTo: null,
                tariff: null,
                duration: null,
                price: null,
                isNeedChildChair: false,
                isRightWheel: false,
                isFullTank: false,
            };
        case ADD_POINT:
            return {
                ...state,
                pointId: action.payload,
                cityId: action.payload ? action.city : state.cityId,
                carId: null,
                color: null,
                dateFrom: null,
                dateTo: null,
                tariff: null,
                duration: null,
                price: null,
                isNeedChildChair: false,
                isRightWheel: false,
                isFullTank: false,
            };
        case ADD_MODEL:
            return {
                ...state,
                color: null,
                dateFrom: null,
                dateTo: null,
                tariff: null,
                duration: null,
                price: null,
                isNeedChildChair: false,
                isRightWheel: false,
                isFullTank: false,
                carId: action.payload,
            };
        case ADD_COLOR:
            return { ...state, color: action.payload };
        case ADD_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case ADD_DATE_TO:
            return { ...state, dateTo: action.payload };
        case ADD_DURATION:
            return {
                ...state,
                duration: action.payload,
                fullDay: action.fullDay,
                fullHour: action.fullHour,
            };
        case TOGGLE_SERVICE:
            state[action.service] = !state[action.service];
            return { ...state };
        case ADD_TARIFF:
            return { ...state, tariff: action.payload };
        case ADD_PRICE:
            return { ...state, price: action.payload };
        default:
            return state;
    }
};
