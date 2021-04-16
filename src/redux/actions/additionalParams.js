import {
    SELECT_COLOR,
    SET_COMPLETE_ADDPARAMS,
    SELECT_DATE_FROM,
    SELECT_DATE_TO,
    SET_DURATION,
    SET_INCOMPLETE_ADDPARAMS,
    SET_PRICE,
    SET_TARIFF,
    TOGGLE_SERVICE,
    SET_TARIFF_PRICE,
    CALCULATE_PRICE,
    IS_VALID_PRICE,
} from "../types";

export function selectColor(color) {
    return (dispatch, getState) => {
        dispatch({ type: SELECT_COLOR, payload: color });
        const order = getState().order;
        order.color && order.dateFrom && order.dateTo && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function selectDateFrom(dateFrom) {
    return (dispatch, getState) => {
        dispatch({ type: SELECT_DATE_FROM, payload: dateFrom });
        const order = getState().order;
        order.color && order.dateFrom && order.dateTo && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function selectDateTo(dateTo) {
    return (dispatch, getState) => {
        dispatch({ type: SELECT_DATE_TO, payload: dateTo });
        const order = getState().order;
        order.color && order.dateFrom && order.dateTo && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function setTariff(selectedValue) {
    return (dispatch, getState) => {
        dispatch({ type: SET_TARIFF, payload: selectedValue });
        const { color, dateFrom, dateTo, tariff } = getState().order;
        color && dateFrom && dateTo && tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export const setTariffPrice = (price) => {
    return (dispatch) => {
        dispatch({ type: SET_TARIFF_PRICE, payload: price });
    };
};

export const toggleService = (service) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SERVICE, service });
    };
};

export function setDuration() {
    return (dispatch, getState) => {
        const inputDates = getState().additionalParams;
        if (inputDates.dateTo && inputDates.dateFrom) {
            const parsedFrom = Date.parse(inputDates.dateFrom);
            const parsedTo = Date.parse(inputDates.dateTo);
            const dateFrom = new Date(parsedFrom);
            const dateTo = new Date(parsedTo);
            const diffInMs = Math.abs(dateTo.getTime() - dateFrom.getTime());
            const day = Math.floor(diffInMs / (1000 * 3600 * 24));
            const hour = Math.ceil((diffInMs / (1000 * 3600 * 24) - day) * 24);
            if (day) {
                return dispatch({
                    type: SET_DURATION,
                    payload: `${day}д${hour}ч`,
                });
            } else {
                return dispatch({ type: SET_DURATION, payload: `${hour}ч` });
            }
        }
        dispatch({ type: SET_DURATION, payload: "" });
    };
}

export const calculatePrice = () => {
    return (dispatch, getState) => {
        const { tariffPrice } = getState().additionalParams;
        const {
            dateFrom,
            dateTo,
            tariff,
            isFullTank,
            isNeedChildChair,
            isRightWheel,
        } = getState().order;
        let tariffInMs;
        switch (tariff) {
            case "Поминутно":
                tariffInMs = 60000;
                break;
            case "Недельный Плюс":
                tariffInMs = 604800000;
                break;
            case "На сутки":
                tariffInMs = 86400000;
            default:
                break;
        }

        let addedServices = 0;
        if (isFullTank) addedServices = addedServices + 500;
        if (isNeedChildChair) addedServices = addedServices + 200;
        if (isRightWheel) addedServices = addedServices + 1600;

        let price =
            dateTo > dateFrom &&
            Math.ceil((dateTo - dateFrom) / tariffInMs) * Number(tariffPrice) +
                addedServices;
        dispatch({ type: CALCULATE_PRICE, payload: price });
    };
};

export const isValidPriceNumber = (value) => {
    return (dispatch, getState) => {
        dispatch({ type: IS_VALID_PRICE, payload: !value });
        const { price } = getState().order;
        !value && price
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
};
