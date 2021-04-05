import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModel } from "../../../redux/actions";

import styles from "./carCard.module.sass";

export const CarCard = ({ car }) => {
    const dispatch = useDispatch();
    const model = useSelector((state) => state.model);

    const classes = [styles.item];

    if (car.id === model.choosingModel.id) classes.push(styles.selected);

    return (
        <div
            className={classes.join(" ")}
            onClick={() => dispatch(selectModel(car))}
        >
            <p className={styles.name}>{car.name}</p>
            <p className={styles.price}>
                {car.priceMin.toLocaleString("ru")} -{" "}
                {car.priceMax.toLocaleString("ru")} Р
            </p>
        </div>
    );
};
