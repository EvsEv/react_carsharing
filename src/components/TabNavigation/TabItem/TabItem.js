import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStage } from "../../../redux/functions/stage";

import styles from "./tabItem.module.sass";

export const TabItem = ({ value, tab }) => {
    const [disabled, setDisabled] = useState(false);
    const { cityId, pointId, carId } = useSelector((state) => state.order);
    const { stage } = useSelector((state) => state.stage);
    const dispatch = useDispatch();
    const classes = [styles.button];
    if (tab === stage) {
        classes.push(styles.active);
    }

    useEffect(() => {
        switch (tab) {
            case 2:
                setDisabled(!cityId || !pointId);
                break;
            case 3:
                setDisabled(!cityId || !pointId || !carId);
            default:
                break;
        }
    }, [cityId, pointId, carId]);

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
