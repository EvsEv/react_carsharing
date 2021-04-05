import React, { useEffect, useMemo, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { filterModels, selectModel } from "../../redux/actions";
import CarCard from "./CarCard";

import styles from "./model.module.sass";

const carsPerPage = 4;

export const Model = () => {
    const model = useSelector((state) => state.model);
    const filteredModels = model.filteredModels;
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(0);
    const pageVisited = pageNumber * carsPerPage;
    const pageCount = Math.ceil(filteredModels.length / carsPerPage);

    const filterByCategory = (e) => {
        setPageNumber(0);
        dispatch(filterModels(e.target.value));
    };

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    useEffect(() => {
        dispatch(filterModels(model.choosingFilter));
    }, []);

    const printModels = useMemo(() => {
        return filteredModels.map((car) => <CarCard key={car.id} car={car} />);
    }, [filteredModels]);

    const printModelsWithPaginate = () => {
        return filteredModels
            .slice(pageVisited, pageVisited + carsPerPage)
            .map((car) => <CarCard key={car.id} car={car} />);
    };

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
