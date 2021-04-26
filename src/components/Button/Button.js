import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import Preloader from "../Preloader";

import styles from "./button.module.sass";
import { useDispatch } from "react-redux";
import { clearOrder } from "../../redux/thunks/order";

const Button = ({ text, link, style }) => {
    const [isLoading, setIsloading] = useState(false);
    const dispatch = useDispatch();

    const classes =
        (style &&
            [styles.default]
                .concat(style.map((element) => styles[element]))
                .join(" ")) ||
        styles.default;
    const content = isLoading ? <Preloader /> : text;

    const onClick = () => {
        setIsloading(true);
        if (text === "Забронировать") {
            dispatch(clearOrder());
        }
    };

    return (
        <Link to={link} className={classes} onClick={onClick}>
            {content}
        </Link>
    );
};

Button.propTypes = {
    text: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
    style: propTypes.array,
};

export default Button;
