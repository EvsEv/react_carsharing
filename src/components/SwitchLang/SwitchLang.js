import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../../redux/actions";

import styles from "./switch-lang.module.sass";

export const SwitchLang = () => {
    const language = useSelector((state) => state.language.currentLanguage);
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(switchLanguage())}
            className={styles.lang}
        >
            {language}
        </button>
    );
};
