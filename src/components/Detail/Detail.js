import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../redux/actions";
import RadioButton from "../Input/RadioButton";

import styles from "./detail.module.sass";
import LeaseTerm from "./LeaseTerm";

export const Detail = () => {
    const params = useSelector((state) => state.additionalParams);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();

    const setColorModel = (e) => {
        dispatch(selectColor(e.target.value));
    };

    return (
        <form>
            <div className={styles.param}>
                <h3 className={styles.title}>Цвет</h3>
                <div className={styles.wrapper}>
                    <RadioButton
                        name="color"
                        value="Any"
                        onChange={setColorModel}
                        label="Любой"
                        checked={order.color === "Any"}
                    />
                    {params.colors.map((color, idx) => (
                        <RadioButton
                            key={idx}
                            name="color"
                            value={color}
                            onChange={setColorModel}
                            label={
                                color === "red"
                                    ? "Красный"
                                    : color === "blue"
                                    ? "Синий"
                                    : color === "yellow"
                                    ? "Желтый"
                                    : null
                            }
                        />
                    ))}
                </div>
            </div>
            <LeaseTerm />
        </form>
    );
};
