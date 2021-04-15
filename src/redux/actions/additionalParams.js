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
    return (dispatch) => {
        dispatch({ type: SELECT_DATE_TO, payload: dateTo });
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
