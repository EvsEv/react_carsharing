import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterModels, selectModel } from "../../redux/actions";
import CarCard from "./CarCard";

import styles from "./model.module.sass";

export const Model = () => {
    const model = useSelector((state) => state.model);
    const filteredModels = model.filteredModels;
    const dispatch = useDispatch();

    const filterByCategory = (e) => {
        dispatch(filterModels(e.target.value));
    };

    useEffect(() => {
        dispatch(filterModels(model.choosingFilter));
    }, []);

    const printModels = useMemo(() => {
        return filteredModels.map((car) => <CarCard key={car.id} />);
    }, [filteredModels]);

    // const printModels = useMemo(() => {
    //     return model.filteredModels.map((item, idx) => (
    //         <div
    //             key={idx}
    //             className={styles.item}
    //             onClick={() => dispatch(selectModel(item))}
    //         >
    //             {item.name}
    //         </div>
    //     ));
    // }, [model.filteredModels]);

    return (
        <div className={styles.model}>
            <form className={styles.select}>
                <div className={styles.parameter}>
                    <input
                        id="All"
                        type="radio"
                        name="model"
                        value="All"
                        className={styles.radio}
                        checked={model.choosingFilter === "All"}
                        onChange={filterByCategory}
                    />
                    <label className={styles.label} htmlFor="All">
                        Все модели
                    </label>
                </div>
                <div className={styles.parameter}>
                    <input
                        id="Econom"
                        type="radio"
                        name="model"
                        value="Econom"
                        checked={model.choosingFilter === "Econom"}
                        className={styles.radio}
                        onChange={filterByCategory}
                    />
                    <label className={styles.label} htmlFor="Econom">
                        Эконом
                    </label>
                </div>
                <div className={styles.parameter}>
                    <input
                        id="Premium"
                        type="radio"
                        name="model"
                        value="Premium"
                        checked={model.choosingFilter === "Premium"}
                        className={styles.radio}
                        onChange={filterByCategory}
                    />
                    <label className={styles.label} htmlFor="Premium">
                        Премиум
                    </label>
                </div>
            </form>
            <section className={styles.wrapper}>{printModels}</section>
        </div>
    );
};
