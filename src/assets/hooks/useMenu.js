import { useEffect, useState } from "react";

export default function useMenu() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    useEffect(() => {
        const presingEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpenMenu(false);
            }
        };
        window.addEventListener("keydown", presingEscape);

        return () => {
            window.removeEventListener("keydown", presingEscape);
        };
    }, []);

    function toggleMenu() {
        setIsOpenMenu(!isOpenMenu);
        !isOpenMenu
            ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = null);
    }

    return [isOpenMenu, toggleMenu];
}
