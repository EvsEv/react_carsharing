import React from "react";

import styles from "./radioButton.module.sass";

export const RadioButton = ({
    name,
    value,
    defaultChecked,
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
                defaultChecked={defaultChecked}
                className={styles.radio}
                onChange={onChange}
            />
            <label className={styles.label} htmlFor={id} title={title}>
                {label}
            </label>
        </div>
    );
};
