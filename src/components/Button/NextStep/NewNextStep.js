import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStage } from "../../../redux/functions/stage";

import styles from "../button.module.sass";

export const NewNextStep = () => {
    const [text, setText] = useState("");
    const [disabledCondition, setDisabledCondition] = useState(true);
    const { stage } = useSelector((state) => state.stage);
    const { cityId, pointId } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        switch (stage) {
            case 1:
                setText("Выбрать модель");
                setDisabledCondition(!cityId || !pointId);
                break;

            default:
                break;
        }
    }, [stage, cityId, pointId]);

    const onClick = () => {
        dispatch(nextStage());
    };

    return (
        <button
            className={[styles.default, styles.wide].join(" ")}
            onClick={onClick}
            disabled={disabledCondition}
        >
            {text}
        </button>
    );
};
