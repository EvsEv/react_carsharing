import React from "react";
import { useSelector } from "react-redux";

import styles from "./price.module.sass";

export const Price = () => {
    const stage = useSelector((state) => state.stage);
    const model = useSelector((state) => state.model);

    const priceValue = () => {
        console.log(model.choosingModel);
        if (
            stage.completedStage === 1 &&
            !Object.keys(model.choosingModel).length
        ) {
            return <span>Выберите модель</span>;
        }

        return `от ${model.choosingModel.priceMin} до 
        ${model.choosingModel.priceMax} ₽`;
    };

    if (stage.completedStage > 0) {
        return (
            <div className={styles.price}>
                <p className={styles.title}>Цена:</p>
                <p className={styles.value}>{priceValue()}</p>
            </div>
        );
    }
    return null;
};
