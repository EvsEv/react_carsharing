import React, { useEffect, useMemo, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import RadioButton from "../Input/RadioButton";
import CarCard from "./CarCard";
import useCompletedStage from "../../assets/hooks/useCompletedStage";

import styles from "./model.module.sass";
import { fetchData } from "../../assets/api/fetchData";
import { setChoosingCategory } from "../../redux/actions/model";

const carsPerPage = 10;

export const Model = () => {
    const [carList, setCarList] = useState([]);
    const [categories, setCategories] = useState([
        {
            id: "any",
            name: "Все модели",
            description: "Все модели",
        },
    ]);
    const { choosingCategory } = useSelector((state) => state.model);
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(0);
    const pageVisited = pageNumber * carsPerPage;
    const pageCount = Math.ceil(carList.length / carsPerPage);
    console.log(pageNumber);

    const fetchCategories = async () => {
        try {
            const actualCategories = await fetchData("category");
            setCategories(categories.concat(actualCategories));
        } catch (e) {
            console.log(e);
        }
    };

    const fetchCarListWithFilter = async () => {
        try {
            const queryValue =
                choosingCategory === "any" ? "" : choosingCategory;
            const queryParameter =
                choosingCategory === "any" ? "" : "categoryId[id]";
            const actualCarList = await fetchData(
                "car",
                queryParameter,
                queryValue
            );
            setCarList(actualCarList);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchCategories();
        fetchCarListWithFilter();
    }, []);

    useEffect(() => {
        fetchCarListWithFilter();
    }, [choosingCategory]);

    useCompletedStage("model");

    const printModels = useMemo(() => {
        return carList.map((car) => <CarCard key={car.id} car={car} />);
    }, [carList]);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const printCarListWithPaginate = useMemo(() => {
        return carList
            .slice(pageVisited, pageVisited + carsPerPage)
            .map((car) => <CarCard key={car.id} car={car} />);
    }, [carList, pageNumber]);

    const onSelectCategory = (e) => {
        setPageNumber(0);
        dispatch(setChoosingCategory(e.target.id));
        console.log(pageNumber);
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
            <Scrollbars className={styles.scroll}>
                <section className={styles.wrapper}>{printModels}</section>
            </Scrollbars>
            <section
                className={[styles.wrapper, styles.withPaginate].join(" ")}
            >
                {printCarListWithPaginate}
                <ReactPaginate
                    previousLabel=""
                    nextLabel=""
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={styles.paginationNav}
                    previousLinkClassName={styles.prev}
                    nextLinkClassName={styles.next}
                    disabledClassName={styles.disabled}
                    activeClassName={styles.pageActive}
                />
            </section>
        </div>
    );
};
