import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchData, putData } from "../../../assets/api/fetchData";
import { nextStage } from "../../../redux/functions/stage";

import styles from "../button.module.sass";

export const NextStep = ({ setpopupPost, isWatchOrder }) => {
    const [text, setText] = useState("");
    const [priceValid, setPriceValid] = useState(true);
    const [disabledCondition, setDisabledCondition] = useState(true);
    const { stage } = useSelector((state) => state.stage);
    const { cityId, pointId, carId, price, color } = useSelector(
        (state) => state.order
    );
    const history = useHistory();
    const dispatch = useDispatch();

    const classes = [styles.default, styles.wide];

    if (isWatchOrder) {
        classes.push(styles["color-2"]);
    }

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
                setDisabledCondition(false);
                break;
            default:
                break;
        }

        if (isWatchOrder) {
            setText("Отменить");
            setDisabledCondition(false);
        }
    }, [stage, cityId, pointId, carId, priceValid, color, isWatchOrder]);

    const onClick = async () => {
        if (isWatchOrder) {
            const [cancelOrder] = await fetchData(
                "orderStatus",
                "name",
                "cancelled"
            );

            const cancelled = putData(
                "order",
                { orderStatusId: cancelOrder },
                isWatchOrder
            );
            console.log(cancelled);
            history.push("/order");
            return;
        }
        stage < 4 ? dispatch(nextStage()) : setpopupPost(true);
    };

    return (
        <button
            className={classes.join(" ")}
            onClick={onClick}
            disabled={disabledCondition}
        >
            {text}
        </button>
    );
};
