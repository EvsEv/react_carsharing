import React, { useEffect, useMemo, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../Input/RadioButton";
import CarCard from "./CarCard";
import useCompletedStage from "../../assets/hooks/useCompletedStage";

import styles from "./model.module.sass";
import { fetchData } from "../../assets/api/fetchData";
import { setChoosingCategory } from "../../redux/actions/model";

export const Model = () => {
    const [carList, setCarList] = useState([]);
    const [categories, setCategories] = useState([
        {
            id: "any",
            name: "Все модели",
            description: "Все модели",
        },
    ]);
    const [currentPage, setCurrentPage] = useState(0);
    const [fetching, setFetching] = useState(true);
    const { choosingCategory } = useSelector((state) => state.model);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategories();
        // fetchCarListWithFilter();
    }, []);

    useEffect(() => {
        setCarList([]);
        fetchCarListWithFilter();
    }, [choosingCategory]);

    useCompletedStage("model");

    const fetchCategories = async () => {
        const actualCategories = await fetchData("category");
        setCategories(categories.concat(actualCategories));
    };
    console.log(currentPage, "cp");

    const fetchCarListWithFilter = async () => {
        const queryValue = choosingCategory === "any" ? "" : choosingCategory;
        const queryParameter =
            choosingCategory === "any" ? "" : "categoryId[id]";
        const actualCarList = await fetchData(
            "car",
            queryParameter,
            queryValue,
            10,
            currentPage
        );
        setCurrentPage((prev) => prev + 1);
        setCarList((prev) => prev.concat(actualCarList));

        setFetching(false);
    };

    const scrollHandler = (event) => {
        if (
            event.target.scrollHeight - event.target.scrollTop ===
                event.target.clientHeight &&
            event.target.scrollTop !== 0
        ) {
            console.log("test");
            console.log("scrollTop", event.target.scrollTop);
            console.log("scrollHeight", event.target.scrollHeight);
            console.log("clientHeight", event.target.clientHeight);
            fetchCarListWithFilter();
        }
    };

    const printModels = useMemo(() => {
        return carList.map((car) => <CarCard key={car.id} car={car} />);
    }, [carList]);

    const onSelectCategory = (e) => {
        setCurrentPage(0);
        dispatch(setChoosingCategory(e.target.id));
    };

    return (
        <div className={styles.model}>
            <form className={styles.select}>
                {categories.map((category) => (
                    <RadioButton
                        key={category.id}
                        name="model"
                        value={category.name}
                        onChange={onSelectCategory}
                        label={category.name}
                        title={category.description}
                        id={category.id}
                        checked={category.id === choosingCategory}
                    />
                ))}
            </form>
            <Scrollbars className={styles.scroll} onScroll={scrollHandler}>
                <section className={styles.wrapper}>{printModels}</section>
            </Scrollbars>
        </div>
    );
};
