import React from "react";

import styles from "../button.module.sass";

export const Submit = ({ text, action, style }) => {
    const classes = [styles.default, styles.submit];
    if (style) {
        classes.push(styles[style]);
    }

    const onClick = (event) => {
        event.preventDefault();
        action && action();
    };
    return (
        <a className={classes.join(" ")} onClick={onClick}>
            {text}
        </a>
    );
};
