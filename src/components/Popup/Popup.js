import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { fetchData, postData } from "../../assets/api/fetchData";
import Submit from "../Button/Submit";

import styles from "./popup.module.sass";

export const Popup = ({ setpopupPost }) => {
    const {
        cityId,
        pointId,
        carId,
        color,
        dateFrom,
        dateTo,
        tariff,
        price,
        isFullTank,
        isNeedChildChair,
        isRightWheel,
    } = useSelector((state) => state.order);
    const history = useHistory();
    const postOrder = async () => {
        const statusId = await fetchData("orderStatus", "name", "new");
        console.log(statusId);
        const orderData = {
            orderStatusId: statusId[0],
            cityId: {
                id: cityId.id,
                name: cityId.name,
            },
            pointId: {
                id: pointId.id,
                name: pointId.name,
                address: pointId.address,
            },
            carId: {
                categoryId: carId.categoryId,
                description: carId.description,
                id: carId.id,
                name: carId.name,
                priceMax: carId.priceMax,
                priceMin: carId.priceMin,
                thumbnail: carId.thumbnail,
            },
            color,
            dateFrom: dateFrom.getTime(),
            dateTo: dateTo.getTime(),
            rateId: {
                id: tariff.id,
                price: tariff.price,
                rateTypeId: tariff.rateTypeId,
            },
            price,
            isFullTank,
            isNeedChildChair,
            isRightWheel,
        };
        console.log(orderData);
        const response = await postData("order", orderData);
        console.log(response);
        setpopupPost();
        history.push(`/order/${response.id}`);
    };

    return createPortal(
        <div className={styles.popup}>
            <div className={styles.wrapper}>
                <h2>Подтвердите заказ</h2>
                <div className={styles.buttons}>
                    <Submit text="Подтвердить" action={postOrder} />
                    <Submit
                        text="Вернуться"
                        style="color-2"
                        action={setpopupPost}
                    />
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
};
