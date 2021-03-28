import React from "react";

import styles from "./burger.module.sass";

export const Burger = ({ isOpenMenu, toggle, header }) => {
    const classes = [styles.inner];

    if (isOpenMenu) {
        classes.push(styles.clicked);
    }

    if (header) {
        classes.push(styles.mobile);
    }

    return (
        <div className={classes.join(" ")} onClick={() => toggle()}>
            <span></span>
        </div>
    );
};
