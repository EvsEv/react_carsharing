import {
    ADD_COLOR,
    ADD_DATE_FROM,
    ADD_DATE_TO,
    ADD_DURATION,
    ADD_ISFULLTANK,
    ADD_ISNEEDCHILDCHAIR,
    ADD_ISRIGHTWHEEL,
    ADD_PRICE,
    ADD_TARIFF,
    TOGGLE_SERVICE,
} from "../types";

export const addColorToOrder = (color) => ({ type: ADD_COLOR, payload: color });

export const addDateFromToOrder = (date) => ({
    type: ADD_DATE_FROM,
    payload: date,
});

export const addDateToToOrder = (date) => ({
    type: ADD_DATE_TO,
    payload: date,
});

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

export const toggleService = (service) => ({ type: TOGGLE_SERVICE, service });

export const addIsFullTankFromServer = (boolean) => ({
    type: ADD_ISFULLTANK,
    payload: boolean,
});

export const addIsNeedChildChairFromServer = (boolean) => ({
    type: ADD_ISNEEDCHILDCHAIR,
    payload: boolean,
});

export const addIsRightWheelFromServer = (boolean) => ({
    type: ADD_ISRIGHTWHEEL,
    payload: boolean,
});

export const addPriceToOrder = (price) => ({ type: ADD_PRICE, payload: price });
