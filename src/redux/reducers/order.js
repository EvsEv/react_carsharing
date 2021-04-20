import {
    SELECT_DATE_FROM,
    SELECT_DATE_TO,
    SET_DURATION,
    SET_TARIFF,
    TOGGLE_SERVICE,
    CALCULATE_PRICE,
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
    cityId: null,
    pointId: null,
    carId: null,
    color: null,
    duration: null,
    fullDay: null,
    fullHour: null,
    dateFrom: null,
    dateTo: null,
    price: 0,
    tariff: null,
    isFullTank: false,
    isNeedChildChair: false,
    isRightWheel: false,
};

export const order = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DATE_FROM:
            return { ...state, dateFrom: action.payload };
        case SELECT_DATE_TO:
            return { ...state, dateTo: action.payload };
        case SET_TARIFF:
            return { ...state, tariff: action.payload };
        case SET_DURATION: {
            return { ...state, duration: action.payload };
        }
        case CALCULATE_PRICE:
            return { ...state, price: action.payload };
        case TOGGLE_SERVICE:
            state[action.service] = !state[action.service];
            return { ...state };

        //
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
                cityId: action.payload ? action.payload.cityId : state.cityId,
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
        case ADD_TARIFF:
            return { ...state, tariff: action.payload };
        case ADD_PRICE:
            return { ...state, price: action.payload };
        default:
            return state;
    }
};
