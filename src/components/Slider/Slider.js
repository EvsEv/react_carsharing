import React from "react";
import SlickSlider from "react-slick";

import "../../assets/styles/slick-slider.sass";
import Button from "../Button/Button";
import styles from "./slider.module.sass";

export const Slider = ({ slides }) => {
    console.log("testing");
    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        draggable: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SlickSlider
            {...settings}
            dotsClass="dots"
            customPaging={() => <button></button>}
            appendDots={(dots) => <ul className="dots">{dots}</ul>}
        >
            {slides.map((slide, idx) => (
                <div key={slide.title}>
                    <div className={styles.information}>
                        <h3 className={styles.title}>{slide.title}</h3>
                        <p className={styles.description}>
                            {slide.description}
                        </p>
                        <Button
                            text="Подробнее"
                            link={slide.link}
                            style={["more", `color-${idx}`]}
                        />
                    </div>
                    <picture className={styles.image}>
                        <img src={slide.image} />
                    </picture>
                </div>
            ))}
        </SlickSlider>
    );
};
