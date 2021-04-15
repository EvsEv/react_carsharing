import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice, setTariff } from "../../../redux/actions/additionalParams";
import RadioButton from "../../Input/RadioButton";
import { fetchData } from "../../../assets/api/fetchData";

export const Tariff = () => {
    const [tariffs, setTariffs] = useState([]);
    const addParams = useSelector((state) => state.additionalParams);
    const dispatch = useDispatch();
    const selectTariff = (e) => {
        dispatch(setTariff(e.target.value));
        // dispatch(setPrice());
    };

    useEffect(async () => {
        const actualTariffs = await fetchData("rate");
        setTariffs(actualTariffs);
    }, []);

    return (
        <>
            {tariffs.map((item) => (
                <RadioButton
                    key={item.id}
                    name="tariff"
                    id={item.id}
                    value={item.rateTypeId.name}
                    onChange={selectTariff}
                    checked={item.rateTypeId.name === addParams.tariff}
                    label={`${item.rateTypeId.name}, ${item.price}₽/${item.rateTypeId.unit}`}
                />
            ))}
        </>
    );
};
