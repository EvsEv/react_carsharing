import React from "react";
import { useSelector } from "react-redux";
import Submit from "../../components/Button/Submit";

import styles from "./check.module.sass";
import Parameter from "./Parameter";
import Price from "./Price";

export const Check = () => {
    const location = useSelector((state) => state.location);
    const model = useSelector((state) => state.model);
    const stage = useSelector((state) => state.stage);
    return (
        <div className={styles.check}>
            <h3 className={styles.title}>Ваш заказ:</h3>
            <Parameter
                name="Пункт выдачи"
                valueOne={location.selectedCity}
                valueTwo={location.selectedPoint}
            />
            {stage.completedStage > 0 && (
                <Parameter name="Модель" valueOne={model.choosingModel.name} />
            )}
            <Price />
            <Submit />
        </div>
    );
};
