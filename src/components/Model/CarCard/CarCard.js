import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModel } from "../../../redux/actions/model";

import styles from "./carCard.module.sass";

export const CarCard = ({ car }) => {
    const dispatch = useDispatch();
    const model = useSelector((state) => state.order.model);

    const classes = [styles.item];

    if (car.id === model.id) classes.push(styles.selected);

    const setSelectModel = (car) => {
        if (car.id === model.id) {
            dispatch(selectModel(""));
        } else {
            dispatch(selectModel(car));
        }
    };

    return (
        <div className={classes.join(" ")} onClick={() => setSelectModel(car)}>
            <p className={styles.name}>{car.name}</p>
            <p className={styles.price}>
                {car.priceMin.toLocaleString("ru")} -{" "}
                {car.priceMax.toLocaleString("ru")} Р
            </p>
            <picture className={styles.image}>
                <img src={car.img} />
            </picture>
        </div>
    );
};
