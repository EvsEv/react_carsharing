import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../assets/api/fetchData";
import {
    changeChoosedCategory,
    refreshModelList,
} from "../../redux/functions/model";
import RadioButton from "../Input/RadioButton";
import CarCard from "./CarCard";
import Preloader from "../Preloader";

import styles from "./model.module.sass";

export const NewModel = () => {
    const [categoryList, setCategoryList] = useState([
        {
            id: "any",
            name: "Все модели",
            desription: "Все модели",
        },
    ]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const { modelList, category } = useSelector((state) => state.model);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchCategoryList();
        dispatch(refreshModelList(currentPage - 1));
        setIsLoading(false);
    }, []);

    const fetchCategoryList = async () => {
        const actualCategoryList = await fetchData("category");
        setCategoryList(categoryList.concat(actualCategoryList));
    };

    const clickOnCategory = (event) => {
        dispatch(changeChoosedCategory(event.target.id));
        setCurrentPage(1);
        dispatch(refreshModelList(currentPage - 1));
    };

    const printCategories = useMemo(() => {
        const categories = categoryList.map((item) => (
            <RadioButton
                key={item.id}
                name="model"
                value={item.name}
                onChange={clickOnCategory}
                label={item.name}
                title={item.desription}
                id={item.id}
                defaultChecked={item.id === category}
            />
        ));
        return categories;
    }, [categoryList]);

    const printModels = useMemo(() => {
        return modelList.map((model) => <CarCard key={model.id} car={model} />);
    }, [modelList]);

    const scrollHandler = (event) => {
        if (
            event.target.scrollHeight - event.target.scrollTop ===
                event.target.clientHeight &&
            event.target.scrollTop !== 0
        ) {
            setIsLoading(true);
            setCurrentPage(currentPage + 1);
            dispatch(refreshModelList(currentPage));
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.model}>
            <form className={styles.select}>{printCategories}</form>
            <section className={styles.wrapper} onScroll={scrollHandler}>
                {printModels}
                <div className={styles.preloader}>
                    {isLoading && <Preloader mainColor={true} />}
                </div>
            </section>
        </div>
    );
};
