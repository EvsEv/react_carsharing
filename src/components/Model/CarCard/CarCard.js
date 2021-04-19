import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addModel } from "../../../redux/functions/model";

import styles from "./carCard.module.sass";

export const CarCard = ({ car }) => {
    const [src, setSrc] = useState();
    const { carId } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const classes = [styles.item];

    if (car.id === carId?.id) {
        classes.push(styles.selected);
    }

    useEffect(() => {
        if (car.thumbnail.path.indexOf("base64") != -1) {
            setSrc(car.thumbnail.path);
        } else {
            setSrc(`https://api-factory.simbirsoft1.com/${car.thumbnail.path}`);
        }
    }, []);

    const onClickModel = (car) => {
        if (car.id === carId?.id) {
            return;
        }
        dispatch(addModel(car));
    };

    return (
        <div className={classes.join(" ")} onClick={() => onClickModel(car)}>
            <p className={styles.name}>{car.name}</p>
            <p className={styles.price}>
                {car.priceMin.toLocaleString("ru")} -{" "}
                {car.priceMax.toLocaleString("ru")} Р
            </p>
            <picture className={styles.image}>
                <img src={src} />
            </picture>
        </div>
    );
};
