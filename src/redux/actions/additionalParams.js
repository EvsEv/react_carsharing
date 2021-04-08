import {
    SELECT_COLOR,
    SET_COMPLETE_ADDPARAMS,
    SET_DATE_FROM,
    SET_DATE_TO,
    SET_INCOMPLETE_ADDPARAMS,
    SET_SERVICES,
    SET_TARIFF,
} from "../types";

export function selectColor(color) {
    return (dispatch, getState) => {
        dispatch({ type: SELECT_COLOR, payload: color });
        const order = getState().order;
        order.color && order.dateFrom && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function setDateFrom(dateFrom) {
    return (dispatch, getState) => {
        dispatch({ type: SET_DATE_FROM, payload: dateFrom });
        const order = getState().order;
        order.color && order.dateFrom && order.tariff
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
        order.color && order.dateFrom && order.tariff
            ? dispatch({ type: SET_COMPLETE_ADDPARAMS })
            : dispatch({ type: SET_INCOMPLETE_ADDPARAMS });
    };
}

export function setSerivces(selected) {
    return (dispatch, getState) => {
        const selectedServices = getState().additionalParams.services;
        const isAlreadyAdded = selectedServices.find(
            (service) => service === selected
        );
        const updatedServices = isAlreadyAdded
            ? selectedServices.filter((service) => service != selected)
            : selectedServices.concat(selected);
        dispatch({
            type: SET_SERVICES,
            payload: updatedServices,
        });
    };
}
