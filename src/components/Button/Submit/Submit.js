import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addLocation,
    changeCompletedStage,
    changeCurrentStage,
} from "../../../redux/actions";

import styles from "../button.module.sass";

export const Submit = () => {
    const [text, setText] = useState();
    const [disabledCondition, setDisabledCondition] = useState();
    const stage = useSelector((state) => state.stage);
    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (stage.currentStage) {
            case 1:
                setText("Выбрать модель");
                setDisabledCondition(
                    !location.selectedCity || !location.selectedPoint
                );
                break;
            case 2:
                setText("Дополнительно");
                break;
            case 3:
                setText("Итого");
            default:
                break;
        }
    }, [stage.currentStage, location]);

    const onSumbitStage = () => {
        stage.completedStage < stage.currentStage &&
            dispatch(changeCompletedStage(stage.completedStage + 1));
        dispatch(changeCurrentStage(stage.currentStage + 1));
    };
    return (
        <button
            className={[styles.default, styles.wide].join(" ")}
            onClick={() => onSumbitStage()}
            disabled={disabledCondition}
        >
            {text}
        </button>
    );
};
