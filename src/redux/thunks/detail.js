import {
    addColorToOrder,
    addDateFromToOrder,
    addDateToToOrder,
    addDurationToOrder,
    addIsFullTankFromServer,
    addIsNeedChildChairFromServer,
    addIsRightWheelFromServer,
    addPriceToOrder,
    addTariffToOrder,
    toggleService,
} from "../actionCreators/detail";

export const addColor = (color) => {
    return (dispatch) => dispatch(addColorToOrder(color));
};

export const addDateFrom = (date) => {
    return (dispatch) => dispatch(addDateFromToOrder(date));
};

export const addDateTo = (date) => {
    return (dispatch) => dispatch(addDateToToOrder(date));
};

export const addDuration = () => {
    return (dispatch, getState) => {
        const { dateFrom, dateTo } = getState().order;
        let durationTime = null;
        let fullDay = null;
        let fullHour = null;
        if (dateFrom && dateTo) {
            durationTime = dateTo - dateFrom;
            const day = (dateTo - dateFrom) / 86400000;
            fullDay = Math.floor(day);
            fullHour = Math.ceil(day - fullDay);
        }
        dispatch(addDurationToOrder(durationTime, fullDay, fullHour));
    };
};

export const addTariff = (tariff) => {
    return (dispatch) => dispatch(addTariffToOrder(tariff));
};

export const toggleSerivces = (service) => {
    return (dispatch) => dispatch(toggleService(service));
};

export const addPrice = () => {
    return (dispatch, getState) => {
        const {
            fullDay,
            fullHour,
            duration,
            tariff,
            isNeedChildChair,
            isFullTank,
            isRightWheel,
        } = getState().order;
        let currentPrice = null;
        if (duration && tariff) {
            if (isNeedChildChair) currentPrice = currentPrice + 200;
            if (isFullTank) currentPrice = currentPrice + 500;
            if (isRightWheel) currentPrice = currentPrice + 1600;
            const ceilDay = fullHour ? fullDay + 1 : fullDay;

            if (tariff.rateTypeId.name === "На сутки") {
                currentPrice = currentPrice + tariff.price * ceilDay;
            } else if (tariff.rateTypeId.name === "Недельный Плюс") {
                const week = Math.ceil(ceilDay / 7);
                currentPrice = currentPrice + tariff.price * week;
            } else if (tariff.rateTypeId.name === "Поминутно") {
                currentPrice =
                    currentPrice +
                    (fullHour * 60 + fullDay * 60 * 24) * tariff.price;
            }
        }
        dispatch(addPriceToOrder(currentPrice));
    };
};

export const addTankInfo = (boolean) => {
    return (dispatch) => dispatch(addIsFullTankFromServer(boolean));
};

export const addChairInfo = (boolean) => {
    return (dispatch) => dispatch(addIsNeedChildChairFromServer(boolean));
};

export const addWheelInfo = (boolean) => {
    return (dispatch) => dispatch(addIsRightWheelFromServer(boolean));
};
