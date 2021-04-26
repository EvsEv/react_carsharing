import { format } from "date-fns";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../assets/api/fetchData";
import { addPoint, addCity } from "../../redux/functions/location";
import { addModel } from "../../redux/functions/model";
import {
    addChairInfo,
    addColor,
    addDateFrom,
    addDateTo,
    addDuration,
    addTankInfo,
    addTariff,
    addWheelInfo,
} from "../../redux/functions/detail";
import Popup from "../Popup";

import styles from "./orderData.module.sass";
import { addPriceToOrder } from "../../redux/actionCreators/detail";

export const OrderData = ({ popupPost, setpopupPost, isWatchOrder }) => {
    const [src, setSrc] = useState("");
    const [number, setNumber] = useState("К761НА73");
    const {
        carId,
        dateFrom,
        isFullTank,
        isRightWheel,
        isNeedChildChair,
    } = useSelector((state) => state.order);
    const dispatch = useDispatch();

    useEffect(() => {
        const orderById = async () => {
            const {
                cityId,
                pointId,
                carId,
                color,
                dateFrom,
                dateTo,
                price,
                rateId,
                isFullTank,
                isNeedChildChair,
                isRightWheel,
            } = await fetchData(`order/${isWatchOrder}`);
            dispatch(addCity(cityId));
            dispatch(addPoint(pointId, cityId));
            dispatch(addModel(carId));
            dispatch(addColor(color));
            dispatch(addDateFrom(new Date(dateFrom)));
            dispatch(addDateTo(new Date(dateTo)));
            dispatch(addDuration());
            dispatch(addPriceToOrder(price));
            dispatch(addTariff(rateId));
            dispatch(addTankInfo(isFullTank));
            dispatch(addChairInfo(isNeedChildChair));
            dispatch(addWheelInfo(isRightWheel));
        };

        if (isWatchOrder) {
            orderById();
        }
    }, [isWatchOrder]);

    useEffect(() => {
        if (carId?.thumbnail.path.indexOf("base64") !== -1) {
            setSrc(carId?.thumbnail.path);
        } else {
            setSrc(
                `https://api-factory.simbirsoft1.com/${carId?.thumbnail.path}`
            );
        }

        if (carId?.number) {
            setNumber(carId?.number);
        }
    }, [carId]);

    return (
        <div>
            <div className={styles.order}>
                <div className={styles.info}>
                    {isWatchOrder && (
                        <h3 className={styles.confirm}>
                            Ваш заказ подтверждён
                        </h3>
                    )}
                    <h4 className={styles.model}>{carId?.name}</h4>
                    <p className={styles.number}>{number}</p>
                    <p className={styles.item}>
                        <span>Топливо</span>{" "}
                        {isFullTank
                            ? "100%"
                            : carId?.tank
                            ? `${carId?.tank}%`
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
                        {dateFrom && format(dateFrom, "dd.MM.yyyy HH:mm")}
                    </p>
                </div>
                <picture className={styles.car}>
                    <img src={src} />
                </picture>
            </div>
            {popupPost && <Popup setpopupPost={setpopupPost} />}
        </div>
    );
};
