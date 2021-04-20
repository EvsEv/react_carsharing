import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStage } from "../../../redux/functions/stage";

import styles from "./tabItem.module.sass";

export const TabItem = ({ value, tab }) => {
    const [disabled, setDisabled] = useState(false);
    const [priceValid, setPriceValid] = useState(true);
    const { cityId, pointId, carId, color, price } = useSelector(
        (state) => state.order
    );
    const { stage } = useSelector((state) => state.stage);
    const dispatch = useDispatch();
    const classes = [styles.button];
    if (tab === stage) {
        classes.push(styles.active);
    }

    useEffect(() => {
        setPriceValid(price > carId?.priceMin && price < carId?.priceMax);
    }, [price, carId]);

    useEffect(() => {
        switch (tab) {
            case 2:
                setDisabled(!cityId || !pointId);
                break;
            case 3:
                setDisabled(!carId || !cityId || !pointId);
                break;
            case 4:
                setDisabled(
                    !priceValid || !color || !carId || !cityId || !pointId
                );
                break;
            default:
                break;
        }
    }, [cityId, pointId, carId, priceValid, color]);

    const goToTab = () => {
        dispatch(changeStage(tab));
    };

    return (
        <li className={styles.item}>
            <button
                className={classes.join(" ")}
                onClick={goToTab}
                disabled={disabled}
            >
                {value}
            </button>
        </li>
    );
};
