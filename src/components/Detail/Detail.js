import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../redux/actions";
import RadioButton from "../Input/RadioButton";
import InputMask from "react-input-mask";

import styles from "./detail.module.sass";

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
            <div className={styles.param}>
                <h3 className={styles.title}>Дата аренды</h3>
                <div className>
                    <InputMask
                        className={styles.date}
                        type="text"
                        name="from"
                        placeholder="Введите дату и время"
                        mask="99.99.9999 99:99"
                        maskChar="-"
                    />
                </div>
            </div>
        </form>
    );
};
