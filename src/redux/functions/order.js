import {
    addChairInfo,
    addDateFrom,
    addDateTo,
    addTankInfo,
    addTariff,
    addWheelInfo,
} from "./detail";
import { addCity, addPoint } from "./location";
import { addModel, changeChoosedCategory } from "./model";
import { changeStage } from "./stage";

export const clearOrder = () => {
    return (dispatch) => {
        dispatch(changeStage(1));
        dispatch(addCity(null));
        dispatch(addPoint(null, null));
        dispatch(changeChoosedCategory("any"));
        dispatch(addModel(null));
        dispatch(addDateFrom(null));
        dispatch(addDateTo(null));
        dispatch(addTariff(null));
        dispatch(addTankInfo(false));
        dispatch(addChairInfo(false));
        dispatch(addWheelInfo(false));
    };
};
