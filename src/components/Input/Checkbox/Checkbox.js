import React from "react";

import styles from "./checkbox.module.sass";

export const Checkbox = ({ name, value, onChange, label }) => {
    return (
        <div className={styles.paramter}>
            <input
                id={value}
                name={name}
                type="checkbox"
                className={styles.checkbox}
            />
            <label htmlFor={value} className={styles.label}>
                {label}
            </label>
        </div>
    );
};
