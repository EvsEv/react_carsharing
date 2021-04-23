import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "../Popup";

import styles from "./orderData.module.sass";

export const OrderData = ({ popupPost, setpopupPost }) => {
    const [src, setSrc] = useState("");
    const [number, setNumber] = useState("К761НА73");
    const {
        carId,
        dateFrom,
        isFullTank,
        isRightWheel,
        isNeedChildChair,
    } = useSelector((state) => state.order);

    useEffect(() => {
        if (carId.thumbnail.path.indexOf("base64") !== -1) {
            setSrc(carId.thumbnail.path);
        } else {
            setSrc(
                `https://api-factory.simbirsoft1.com/${carId.thumbnail.path}`
            );
        }

        if (carId.number) {
            setNumber(carId.number);
        }
    }, []);

    return (
        <>
            <div className={styles.order}>
                <div className={styles.info}>
                    <h4 className={styles.model}>{carId.name}</h4>
                    <p className={styles.number}>{number}</p>
                    <p className={styles.item}>
                        <span>Топливо</span>{" "}
                        {isFullTank
                            ? "100%"
                            : carId.tank
                            ? `${carId.tank}%`
                            : "минимально"}
                    </p>

                    {isNeedChildChair && (
                        <p className={styles.item}>
                            <span>Детское кресло</span> добавлено
                        </p>
                    )}

                    {isRightWheel && (
                        <p className={styles.item}>
                            <span>Нахождение руля</span> справа
                        </p>
                    )}
                    <p className={styles.item}>
                        <span>Доступна с </span>
                        {format(dateFrom, "dd.MM.yyyy HH:mm")}
                    </p>
                </div>
                <picture className={styles.car}>
                    <img src={src} />
                </picture>
            </div>
            {popupPost && <Popup setpopupPost={setpopupPost} />}
        </>
    );
};
