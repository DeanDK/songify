import React from "react";
import clsx from "clsx";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search.svg?react";
import {useToggle} from "../../hooks/useIsToggle.tsx";

export const SearchBar: React.FC = () => {
    const [isActive, toggleActive] = useToggle(false);

    return (
        <div
            className={clsx(styles.wrapper, {
                [styles.clicked]: isActive
            })}
            onClick={toggleActive}
        >
            <SearchIcon className={styles.icon} />
            <input
                type="text"
                placeholder={isActive ? undefined : "Find favorite Songs & Artists"}
                className={styles.input}
            />
        </div>
    );
};
