import React, { useEffect, useMemo, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { filterModels } from "../../redux/actions/model";
import RadioButton from "../Input/RadioButton";
import CarCard from "./CarCard";
import useCompletedStage from "../../assets/hooks/useCompletedStage";

import styles from "./model.module.sass";
import { fetchData } from "../../assets/api/fetchData";

const carsPerPage = 4;

export const Model = () => {
    const model = useSelector((state) => state.model);
    const filteredModels = model.filteredModels;
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(0);
    const pageVisited = pageNumber * carsPerPage;
    const pageCount = Math.ceil(filteredModels.length / carsPerPage);

    const [categories, setCategories] = useState([
        {
            id: "any",
            name: "Все модели",
            description: "Все модели",
        },
    ]);

    const fetchCategories = async () => {
        try {
            const actualCategories = await fetchData("category");
            setCategories(categories.concat(actualCategories));
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchCategories();
        dispatch(filterModels(model.choosingFilter));
    }, []);

    useCompletedStage("model");

    const printModels = useMemo(() => {
        return filteredModels.map((car) => <CarCard key={car.id} car={car} />);
    }, [filteredModels]);

    const filterByCategory = (e) => {
        setPageNumber(0);
        dispatch(filterModels(e.target.value));
    };

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const printModelsWithPaginate = () => {
        return filteredModels
            .slice(pageVisited, pageVisited + carsPerPage)
            .map((car) => <CarCard key={car.id} car={car} />);
    };

    return (
        <div className={styles.model}>
            <form className={styles.select}>
                {categories.map((category) => (
                    <RadioButton
                        key={category.id}
                        name="model"
                        value={category.name}
                        onChange={() => {}}
                        label={category.name}
                        title={category.description}
                    />
                ))}
                {/* <RadioButton
                    name="model"
                    value="All"
                    checked={model.choosingFilter === "All"}
                    onChange={filterByCategory}
                    label="Все модели"
                />
                <RadioButton
                    name="model"
                    value="Econom"
                    checked={model.choosingFilter === "Econom"}
                    onChange={filterByCategory}
                    label="Эконом"
                />
                <RadioButton
                    name="model"
                    value="Premium"
                    checked={model.choosingFilter === "Premium"}
                    onChange={filterByCategory}
                    label="Премиум"
                /> */}
            </form>
            <Scrollbars className={styles.scroll}>
                <section className={styles.wrapper}>{printModels}</section>
            </Scrollbars>
            <section
                className={[styles.wrapper, styles.withPaginate].join(" ")}
            >
                {printModelsWithPaginate()}
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
