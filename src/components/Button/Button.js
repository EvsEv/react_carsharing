import React, { useState } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Preloader } from "../Preloader/Preloader";

import styles from "./button.module.sass";

const Button = ({ text, link, style }) => {
    const [isLoading, setIsloading] = useState(false);

    const classes =
        (style &&
            [styles.default]
                .concat(style.map((element) => styles[element]))
                .join(" ")) ||
        styles.default;
    const content = isLoading ? <Preloader /> : text;

    return (
        <Link to={link} className={classes} onClick={() => setIsloading(true)}>
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
