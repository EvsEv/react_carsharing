import React from "react";
import Submit from "../../components/Button/Submit";

import styles from "./check.module.sass";

export const Check = ({ location }) => {
    const value = () => {
        if (location.currentCity === "" || location.choosingPoint === "") {
            return "Не выбрано";
        }
        return (
            <>
                {location.currentCity}, <span>{location.choosingPoint}</span>
            </>
        );
    };
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <div className={styles.parameter}>
                <p className={styles.name}>Пунк выдачи</p>
                <span className={styles.dots}></span>
                <p className={styles.value}>{value()}</p>
            </div>
            <Submit
                disabled={!location.currentCity || !location.choosingPoint}
            />
        </div>
    );
};
