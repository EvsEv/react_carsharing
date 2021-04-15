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
                value="Любой"
                onChange={setColorModel}
                label="Любой"
                checked={order.color === "Любой"}
                id="Любой"
            />
            {params.colors.map((color) => (
                <RadioButton
                    key={color}
                    name="color"
                    value={color}
                    onChange={setColorModel}
                    label={color[0].toUpperCase() + color.slice(1)}
                    checked={order.color === color}
                    id={color}
                />
            ))}
        </>
    );
};
