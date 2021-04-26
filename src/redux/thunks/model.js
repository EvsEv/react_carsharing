import { fetchData } from "../../api/fetchData";
import {
    addModelToStore,
    changeCategory,
    getModelListFromServer,
} from "../actionCreators/model";

export const refreshModelList = (page) => {
    return async (dispatch, getState) => {
        const { modelList, category } = getState().model;
        const filter = category === "any" ? "" : "categoryId";
        const fetchedModelList = await fetchData(
            "car",
            filter,
            category,
            15,
            page
        );
        const updatedModelList =
            page === 0 ? fetchedModelList : modelList.concat(fetchedModelList);
        dispatch(getModelListFromServer(updatedModelList));
    };
};

export const changeChoosedCategory = (filter) => {
    return (dispatch) => dispatch(changeCategory(filter));
};

export const addModel = (model) => {
    return (dispatch) => dispatch(addModelToStore(model));
};
