import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import Check from "../../components/Check";
import Detail from "../../components/Detail";
import Location from "../../components/Location";
import Model from "../../components/Model";
import { changeCurrentStage } from "../../redux/actions";

import styles from "./orderPage.module.sass";

const stages = ["Местоположение", "Модель", "Дополнительно", "Итого"];

export const OrderPage = () => {
    const stage = useSelector((state) => state.stage);
    const dispatch = useDispatch();
    function printStage() {
        switch (stage.currentStage) {
            case 1:
                return <Location />;
            case 2:
                return <Model />;
            case 3:
                return <Detail />;
            default:
                return;
        }
    }

    return (
        <main className={styles.main}>
            <ul className={styles.breadcrumbs}>
                <div className={styles.container}>
                    {stages.map((item, idx) => (
                        <li className={styles.item} key={idx}>
                            <button
                                className={
                                    idx + 1 === stage.currentStage
                                        ? [styles.button, styles.selected].join(
                                              " "
                                          )
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
                </div>
            </ul>
            <Scrollbars className={styles.scroll}>
                <div className={styles.wrapper}>
                    <div className={styles.stage}>{printStage()}</div>
                    <Check />
                </div>
            </Scrollbars>
        </main>
    );
};
