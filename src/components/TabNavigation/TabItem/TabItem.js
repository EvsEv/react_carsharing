import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStage } from "../../../redux/actions/stage";

import styles from "./tabItem.module.sass";

export const TabItem = ({ value, tab }) => {
    const [disabled, setDisabled] = useState();
    const stage = useSelector((state) => state.stage);
    const dispatch = useDispatch();

    const classes = [styles.button];
    if (tab === stage.stage) {
        classes.push(styles.active);
    }

    const goToTab = () => {
        dispatch(setStage(tab));
    };

    useEffect(() => {
        setDisabled(tab - 1 > stage.completedStage);
    }, [stage.completedStage]);

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
