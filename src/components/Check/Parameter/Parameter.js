import React from "react";

import styles from "./parameter.module.sass";

export const Parameter = ({ name, valueOne, valueTwo }) => {
    const printValue = () => {
        console.log("in function");
        if (valueOne && valueTwo) {
            return (
                <>
                    {valueOne} ,<span>{valueTwo}</span>
                </>
            );
        } else if (valueOne) {
            return valueOne;
        }
        return "Не выбрано";
    };
    return (
        <div className={styles.parameter}>
            <p className={styles.name}>{name}</p>
            <span className={styles.dots}></span>
            <p className={styles.value}>{printValue()}</p>
        </div>
    );
};
