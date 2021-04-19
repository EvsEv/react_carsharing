import React from "react";
import { useSelector } from "react-redux";
import NextStep from "../Button/NextStep";

import styles from "./check.module.sass";
import Parameter from "./Parameter";

export const NewCheck = () => {
    const { cityId, pointId } = useSelector((state) => state.order);
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <div>
                <Parameter
                    name="Пункт выдачи"
                    valueOne={cityId?.name}
                    valueTwo={pointId?.address}
                />
            </div>
            <NextStep />
        </div>
    );
};
