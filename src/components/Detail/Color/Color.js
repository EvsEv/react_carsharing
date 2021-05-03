import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addColor } from "../../../redux/thunks/detail";
import RadioButton from "../../Input/RadioButton";

export const Color = () => {
    const { color } = useSelector((state) => state.order);
    const { selectedModel } = useSelector((state) => state.model);

    const dispatch = useDispatch();
    const onClickColor = (event) => {
        dispatch(addColor(event.target.value));
    };
    return (
        <>
            <RadioButton
                name="color"
                value="Любой"
                onChange={onClickColor}
                label="Любой"
                defaultChecked={color === "Любой"}
                id="Любой"
            />
            {selectedModel.colors.map((item) => (
                <RadioButton
                    key={item}
                    name="color"
                    value={item}
                    onChange={onClickColor}
                    label={item[0].toUpperCase() + item.slice(1)}
                    defaultChecked={color === item}
                    id={item}
                />
            ))}
        </>
    );
};
