import React from "react";

import styles from "./radioButton.module.sass";

export const RadioButton = ({ name, value, checked, onChange, label }) => {
    return (
        <div className={styles.parameter}>
            <input
                id={value}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                className={styles.radio}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={value}>
                {label}
            </label>
        </div>
    );
};
