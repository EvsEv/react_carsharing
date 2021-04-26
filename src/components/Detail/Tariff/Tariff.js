import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../../Input/RadioButton";
import { fetchData } from "../../../assets/api/fetchData";
import { addTariff } from "../../../redux/thunks/detail";

export const Tariff = () => {
    const [tariffs, setTariffs] = useState([]);
    const { tariff } = useSelector((state) => state.order);
    const dispatch = useDispatch();

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
                    id={item.price}
                    value={item.rateTypeId.name}
                    onChange={() => dispatch(addTariff(item))}
                    checked={false}
                    label="test"
                    defaultChecked={
                        item.rateTypeId.id === tariff?.rateTypeId.id
                    }
                    label={`${item.rateTypeId.name}, ${item.price}₽/${item.rateTypeId.unit}`}
                />
            ))}
        </>
    );
};
