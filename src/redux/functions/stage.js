import { setNextStage } from "../actionCreators/stage";

export const nextStage = () => {
    return (dispatch, getState) => {
        const { stage } = getState().stage;
        const incrementStage = stage + 1;
        dispatch(setNextStage(incrementStage));
    };
};
