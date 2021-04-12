import {
    SELECT_COLOR,
    SET_COMPLETE_ADDPARAMS,
    SET_DATE_FROM,
    SET_DATE_TO,
    SET_DURATION,
    SET_INCOMPLETE_ADDPARAMS,
    SET_PRICE,
    SET_TARIFF,
    TOGGLE_SERVICE,
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

export function setDateFrom(dateFrom) {
    return (dispatch, getState) => {
        dispatch({ type: SET_DATE_FROM, payload: dateFrom });
        const order = getState().order;
        order.color && order.dateFrom && order.dateTo && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function setDateTo(dateTo) {
    return (dispatch) => {
        dispatch({ type: SET_DATE_TO, payload: dateTo });
    };
}

export function setTariff(tariff) {
    return (dispatch, getState) => {
        dispatch({ type: SET_TARIFF, payload: tariff });
        const order = getState().order;
        order.color && order.dateFrom && order.dateTo && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export const toggleService = (service) => {
    return (dispatch) => {
        dispatch({ type: TOGGLE_SERVICE, service });
    };
};

export function setDuration() {
    return (dispatch, getState) => {
        const inputDates = getState().additionalParams;
        if (inputDates.dateTo) {
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

export function setPrice() {
    return (dispatch, getState) => {
        const duration = getState().additionalParams.duration;
        const tariff = getState().additionalParams.tariff;
        let price = "";
        if (tariff === "byDay") {
            if (
                duration.split("д")[1] &&
                duration.split("д")[1].split("ч")[0] != 0
            ) {
                price = (Number(duration.split("д")[0]) + 1) * 1999;
            } else {
                price = Number(duration.split("д")[0]) * 1999 || 1999;
            }
        } else if (tariff === "byMinute") {
            if (duration.split("д")[1]) {
                price =
                    (Number(duration.split("д")[0]) * 60 * 24 +
                        Number(duration.split("д")[1].split("ч")[0])) *
                    7;
            } else {
                price = Number(duration.split("ч")[0]) * 7 * 60;
            }
        }

        dispatch({ type: SET_PRICE, payload: price });
    };
}
