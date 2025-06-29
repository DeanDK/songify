import React from "react";
import clsx from "clsx";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/search.svg?react";
import {useToggle} from "../../hooks/useIsToggle.tsx";

type Props = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchBar: React.FC<Props> = ({onChange}) => {
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
                readOnly={!isActive}
                onChange={onChange}
            />
        </div>
    );
};
