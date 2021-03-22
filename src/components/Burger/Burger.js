import React from "react";

import styles from "./burger.module.sass";

export const Burger = ({ isOpen, toggle }) => {
    const classes = [styles.inner];

    if (isOpen) {
        classes.push(styles.clicked);
    }

    return (
        <div className={styles.burger} onClick={() => toggle()}>
            <div className={classes.join(" ")}>
                <span></span>
            </div>
        </div>
    );
};
