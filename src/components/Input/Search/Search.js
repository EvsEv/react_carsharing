import React, { useEffect, useRef, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { useSelector } from "react-redux";

import styles from "./search.module.sass";

export const Search = ({
    variants,
    placeholder,
    onSelect,
    valueFromStore,
    isPointSearch,
    label,
}) => {
    const [value, setValue] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const dropdown = useRef();

    useEffect(() => {
        setValue(valueFromStore);
    }, [valueFromStore]);

    useEffect(() => {
        setSuggestions(variants);
    }, [variants]);

    useEffect(() => {
        if (!showDropdown) return;
        const handleClick = (event) => {
            if (dropdown.current && !dropdown.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        window.addEventListener("click", handleClick);
        return () => {
            window.removeEventListener("click", handleClick);
        };
    }, [dropdown, showDropdown]);

    const onType = (event) => {
        setShowDropdown(true);
        setValue(event.target.value);
        if (isPointSearch) {
            const updatedSuggestions =
                event.target.value.length > 1
                    ? variants.filter(
                          (item) =>
                              item.address
                                  .toLowerCase()
                                  .search(event.target.value.toLowerCase()) !==
                              -1
                      )
                    : variants;
            setSuggestions(updatedSuggestions);

            const isContain = suggestions.find((item) => {
                if (item.address === event.target.value) {
                    onSelect(item);
                    setValue(valueFromStore);
                    setShowDropdown(false);
                    setSuggestions(variants);
                    return true;
                }
            });
            isContain && setSuggestions(variants);
        } else {
            const updatedSuggestions =
                event.target.value.length > 1
                    ? variants.filter(
                          (item) =>
                              item.name
                                  .toLowerCase()
                                  .search(event.target.value.toLowerCase()) !==
                              -1
                      )
                    : variants;
            setSuggestions(updatedSuggestions);
            suggestions.find((item) => {
                if (item.name === event.target.value) {
                    onSelect(item);
                    setValue(valueFromStore);
                    setShowDropdown(false);
                    setSuggestions(variants);
                    return true;
                }
                setShowDropdown(true);
                return false;
            });
        }
    };

    const onSuggestionClick = (item) => {
        isPointSearch ? setValue(item.address) : setValue(item.name);
        setShowDropdown(false);
        onSelect(item);
        setSuggestions(variants);
    };

    const resetValue = () => {
        onSelect(null);
        setValue(valueFromStore);
        setSuggestions(variants);
        setShowDropdown(false);
    };

    const onSearchClick = () => {
        setShowDropdown(true);
        console.log(showDropdown);
    };

    const printSuggestions = () => {
        return suggestions?.map((item, index) => (
            <li
                key={index}
                className={styles.item}
                onClick={() => onSuggestionClick(item)}
            >
                {item.address || item.name}
            </li>
        ));
    };

    return (
        <div className={styles.search}>
            <label htmlFor={label} className={styles.label}>
                {label}
            </label>
            <div className={styles.inputField}>
                <input
                    type="text"
                    value={value || ""}
                    onChange={onType}
                    className={styles.input}
                    onClick={onSearchClick}
                    placeholder={placeholder}
                    id={label}
                />
                <span className={styles.reset} onClick={resetValue} />
                {showDropdown && (
                    <ul className={styles.dropdown} id="wrapper" ref={dropdown}>
                        <Scrollbars autoHeight className={styles.scroll}>
                            {printSuggestions()}
                        </Scrollbars>
                    </ul>
                )}
            </div>
        </div>
    );
};
