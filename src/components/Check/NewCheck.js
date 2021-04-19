import React from "react";
import { useSelector } from "react-redux";
import NextStep from "../Button/NextStep";

import styles from "./check.module.sass";
import Parameter from "./Parameter";
import Price from "./Price";

export const NewCheck = () => {
    const { cityId, pointId, carId, color } = useSelector(
        (state) => state.order
    );
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <div>
                <Parameter
                    name="Пункт выдачи"
                    valueOne={cityId?.name}
                    valueTwo={pointId?.address}
                />
                {carId && <Parameter name="Модель" valueOne={carId?.name} />}
                {color && <Parameter name="Цвет" valueOne={color} />}
            </div>
            {carId && <Price />}
            <NextStep />
        </div>
    );
};
