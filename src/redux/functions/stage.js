import { setStage } from "../actionCreators/stage";

export const nextStage = () => {
    return (dispatch, getState) => {
        const { stage } = getState().stage;
        const incrementStage = stage + 1;
        dispatch(setStage(incrementStage));
    };
};

export const changeStage = (stage) => {
    return (dispatch) => dispatch(setStage(stage));
};
