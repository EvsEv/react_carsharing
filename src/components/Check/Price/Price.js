import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./price.module.sass";

export const Price = () => {
    const [isValid, setIsValid] = useState(true);
    const { price, carId } = useSelector((state) => state.order);
    const classes = [styles.value];

    useEffect(() => {
        setIsValid(price >= carId.priceMin && price <= carId.priceMax);
    }, [price]);

    if (!isValid) {
        classes.push(styles.invalid);
    }

    return (
        <div className={styles.price}>
            <p className={styles.title}>Цена:</p>
            {!price && (
                <p>
                    {carId.priceMin.toLocaleString("ru")} -{" "}
                    {carId.priceMax.toLocaleString("ru")} ₽
                </p>
            )}
            {price && (
                <>
                    <p className={classes.join(" ")}>
                        {price.toLocaleString("ru")} ₽
                    </p>
                    {!isValid && (
                        <span className={styles.alert}>
                            Диапазон: {carId.priceMin.toLocaleString("ru")} -{" "}
                            {carId.priceMax.toLocaleString("ru")} ₽
                        </span>
                    )}
                </>
            )}
        </div>
    );
};
