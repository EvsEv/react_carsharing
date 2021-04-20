import {
    ADD_COLOR,
    ADD_DATE_FROM,
    ADD_DATE_TO,
    ADD_DURATION,
    ADD_PRICE,
    ADD_TARIFF,
} from "../types";

export const addColorToOrder = (color) => {
    return { type: ADD_COLOR, payload: color };
};

export const addDateFromToOrder = (date) => {
    return { type: ADD_DATE_FROM, payload: date };
};

export const addDateToToOrder = (date) => {
    return { type: ADD_DATE_TO, payload: date };
};

export const addDurationToOrder = (duration, fullDay, fullHour) => ({
    type: ADD_DURATION,
    payload: duration,
    fullDay,
    fullHour,
});

export const addTariffToOrder = (tariff) => ({
    type: ADD_TARIFF,
    payload: tariff,
});

export const addPriceToOrder = (price) => ({ type: ADD_PRICE, payload: price });
