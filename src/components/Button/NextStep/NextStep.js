import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextStage } from "../../../redux/functions/stage";

import styles from "../button.module.sass";

export const NextStep = ({ setpopupPost }) => {
    const [text, setText] = useState("");
    const [priceValid, setPriceValid] = useState(true);
    const [disabledCondition, setDisabledCondition] = useState(true);
    const { stage } = useSelector((state) => state.stage);
    const { cityId, pointId, carId, price, color } = useSelector(
        (state) => state.order
    );
    const dispatch = useDispatch();

    useEffect(() => {
        setPriceValid(price >= carId?.priceMin && price <= carId?.priceMax);
    }, [price]);

    useEffect(() => {
        switch (stage) {
            case 1:
                setText("Выбрать модель");
                setDisabledCondition(!cityId || !pointId);
                break;
            case 2:
                setText("Дополнительно");
                setDisabledCondition(!carId);
                break;
            case 3:
                setText("Итого");
                setDisabledCondition(!priceValid || !color);
                break;
            case 4:
                setText("Заказать");
            default:
                break;
        }
    }, [stage, cityId, pointId, carId, priceValid, color]);

    const onClick = () => {
        stage < 4 ? dispatch(nextStage()) : setpopupPost(true);
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
