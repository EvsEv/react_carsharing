import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSerivces } from "../../../redux/thunks/detail";
import Checkbox from "../../Input/Checkbox";

export const Services = () => {
    const { isFullTank, isNeedChildChair, isRightWheel } = useSelector(
        (state) => state.order
    );
    const dispatch = useDispatch();
    const onChange = (e) => {
        dispatch(toggleSerivces(e.target.value));
    };
    return (
        <>
            <Checkbox
                name="services"
                value="isFullTank"
                label="Полный бак, 500р"
                onChange={onChange}
                checked={isFullTank}
            />
            <Checkbox
                name="services"
                value="isNeedChildChair"
                label="Детское кресло, 200р"
                onChange={onChange}
                checked={isNeedChildChair}
            />
            <Checkbox
                name="services"
                value="isRightWheel"
                label="Правый руль, 1600р"
                onChange={onChange}
                checked={isRightWheel}
            />
        </>
    );
};
