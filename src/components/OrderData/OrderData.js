import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./orderData.module.sass";

export const OrderData = () => {
    const [src, setSrc] = useState();
    const order = useSelector((state) => state.order);
    const date = new Date(Date.parse(order.dateFrom));
    const day =
        date.getDate().toString().length === 1
            ? `0${date.getDate()}`
            : date.getDate();
    const month =
        (date.getMonth() + 1).toString().length === 1
            ? `0${date.getMonth() + 1}`
            : date.getMonth() + 1;

    const hour =
        (date.getHours() + 1).toString().length === 1
            ? `0${date.getHours() + 1}`
            : date.getHours() + 1;
    const minute =
        (date.getHours() + 1).toString().length === 1
            ? `0${date.getHours() + 1}`
            : date.getHours() + 1;

    const formatDate = `${day}.${month}.${date.getFullYear()} ${hour}:${minute} `;

    // const printAddServices = order.addServices.map((service) => {
    //     switch (service) {
    //         case "fullFuel":
    //             return (
    //                 <p key={service} className={styles.item}>
    //                     <span>Топливо</span> 100%
    //                 </p>
    //             );
    //         case "childChair":
    //             return (
    //                 <p key={service} className={styles.item}>
    //                     <span>Детское кресло</span> добавлено
    //                 </p>
    //             );
    //         case "rightHand":
    //             return (
    //                 <p key={service} className={styles.item}>
    //                     <span>Нахождение руля</span> справа
    //                 </p>
    //             );
    //         default:
    //             break;
    //     }
    // });

    useEffect(() => {
        if (order.model.thumbnail.path.indexOf("base64") != -1) {
            setSrc(order.model.thumbnail.path);
        } else {
            setSrc(
                `https://api-factory.simbirsoft1.com/${order.model.thumbnail.path}`
            );
        }
    }, []);

    return (
        <div className={styles.order}>
            <div className={styles.info}>
                <h4 className={styles.model}>{order.model.name}</h4>
                <p className={styles.number}>K 761 HA 73</p>
                {order.isFullTank && (
                    <p className={styles.item}>
                        <span>Топливо</span> 100%
                    </p>
                )}
                {order.isNeedChildChair && (
                    <p className={styles.item}>
                        <span>Детское кресло</span> добавлено
                    </p>
                )}
                {order.isRightWheel && (
                    <p className={styles.item}>
                        <span>Нахождение руля</span> справа
                    </p>
                )}
                <p className={styles.item}>
                    <span>Доступна с </span>
                    {formatDate}
                </p>
            </div>
            <picture className={styles.car}>
                <img src={src} />
            </picture>
        </div>
    );
};
