import React from "react";

import styles from "./radioButton.module.sass";

export const RadioButton = ({
    name,
    value,
    checked,
    onChange,
    label,
    title,
    id,
}) => {
    return (
        <div className={styles.parameter}>
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                className={styles.radio}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={id} title={title}>
                {label}
            </label>
        </div>
    );
};
