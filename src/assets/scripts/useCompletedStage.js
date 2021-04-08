import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCompletedStage } from "../../redux/actions/stage";

export default function useCompletedStage(currentStage) {
    const stage = useSelector((state) => state.stage);
    const isCompleted = useSelector((state) => state[currentStage].completed);
    const dispatch = useDispatch();
    const completedStage = useRef(stage.completedStage);

    useEffect(() => {
        if (isCompleted) {
            dispatch(setCompletedStage(completedStage.current));
        }
    }, []);

    useEffect(() => {
        if (isCompleted) {
            if (stage.stage - 1 === completedStage.current) {
                dispatch(setCompletedStage(completedStage.current + 1));
            } else {
                dispatch(setCompletedStage(completedStage.current));
            }
        } else {
            dispatch(setCompletedStage(stage.stage - 1));
        }
    }, [isCompleted]);
}
