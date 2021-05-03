import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../../redux/thunks/language";

import styles from "./switchLang.module.sass";

export const SwitchLang = ({ menu }) => {
    const language = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const classes = [styles.lang];

    if (menu) {
        classes.push(styles.inMenu);
    }

    const onClick = () => {
        dispatch(switchLanguage());
    };

    return (
        <button onClick={onClick} className={classes.join(" ")}>
            {language}
        </button>
    );
};
