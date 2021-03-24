import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../redux/actions";

import styles from "./switch-lang.module.sass";

export const SwitchLang = ({ menu }) => {
    const language = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    const classes = [styles.lang];

    if (menu) {
        classes.push(styles.inMenu);
    }

    return (
        <button
            onClick={() => dispatch(switchLanguage())}
            className={classes.join(" ")}
        >
            {language}
        </button>
    );
};
