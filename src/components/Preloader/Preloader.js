import React from "react";

import styles from "./preloader.module.sass";

export const Preloader = (mainColor) => {
    const classes = [styles.spinner];
    if (mainColor) {
        classes.push(styles.mainColor);
    }
    return <div className={classes.join(" ")}></div>;
};
