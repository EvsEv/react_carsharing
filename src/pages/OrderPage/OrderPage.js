import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../components/Check";
import Location from "../../components/Location";
import Model from "../../components/Model";
import { changeCurrentStage } from "../../redux/actions";

import styles from "./orderPage.module.sass";

const breadcrumbs = ["Местоположение", "Модель", "Дополнительно", "Итого"];

export const OrderPage = () => {
    const stage = useSelector((state) => state.stage);
    const dispatch = useDispatch();
    function printStage() {
        switch (stage.currentStage) {
            case 1:
                return <Location />;
            case 2:
                return <Model />;
            default:
                return;
        }
    }

    return (
        <main className={styles.main}>
            <ul className={styles.breadcrumbs}>
                {breadcrumbs.map((item, idx) => (
                    <li className={styles.item} key={idx}>
                        <button
                            className={
                                idx + 1 === stage.currentStage
                                    ? [styles.button, styles.selected].join(" ")
                                    : styles.button
                            }
                            disabled={idx > stage.completedStage}
                            onClick={() =>
                                dispatch(changeCurrentStage(idx + 1))
                            }
                        >
                            {item}
                        </button>
                    </li>
                ))}
            </ul>
            <div className={styles.wrapper}>
                <div className={styles.stage}>{printStage()}</div>
                <Check />
            </div>
        </main>
    );
};
