import React from "react";
import { useSelector } from "react-redux";

import styles from "./price.module.sass";

export const Price = () => {
    const { price, carId } = useSelector((state) => state.order);

    return (
        <div className={styles.price}>
            <p className={styles.title}>Цена:</p>
            {!price && (
                <p>
                    {carId.priceMin} - {carId.priceMax} ₽
                </p>
            )}
        </div>
    );
};
