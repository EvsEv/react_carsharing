import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStage } from "../../../redux/actions/stage";

import styles from "../button.module.sass";

export const NextStep = ({ isValidPrice }) => {
    const [text, setText] = useState();
    const [disabledCondition, setDisabledCondition] = useState();
    const stage = useSelector((state) => state.stage);
    const location = useSelector((state) => state.location);
    const additionalParams = useSelector((state) => state.additionalParams);
    const order = useSelector((state) => state.order);

    //
    const { carId } = useSelector((state) => state.order);
    console.log(carId);
    //

    const dispatch = useDispatch();

    useEffect(() => {
        switch (stage.stage) {
            case 1:
                setText("Выбрать модель");
                setDisabledCondition(!location.completed);
                break;
            case 2:
                setText("Дополнительно");
                setDisabledCondition(!carId);
                break;
            case 3:
                setText("Итого");
                setDisabledCondition(
                    !additionalParams.completed || isValidPrice
                );
                break;
            case 4:
                setText("Заказать");
                setDisabledCondition(!order.color);
            default:
                break;
        }
    }, [
        stage.stage,
        location.completed,
        additionalParams.completed,
        order.color,
        isValidPrice,
        //
        carId,
    ]);

    const onSumbitStage = () => {
        if (stage.stage < 4) dispatch(nextStage());
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
