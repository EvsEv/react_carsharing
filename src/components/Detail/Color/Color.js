import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectColor } from "../../../redux/actions/additionalParams";
import RadioButton from "../../Input/RadioButton";

export const Color = () => {
    const params = useSelector((state) => state.additionalParams);
    const order = useSelector((state) => state.order);
    const dispatch = useDispatch();
    const setColorModel = (e) => {
        dispatch(selectColor(e.target.value));
    };
    return (
        <>
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
        </>
    );
};
