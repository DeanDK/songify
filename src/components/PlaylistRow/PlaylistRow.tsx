import React from "react";
import styles from "./playlistRow.module.css";
import PlayLight from "../../assets/play-light.svg?react";
import PlayDark from "../../assets/play-dark.svg?react";
import Menu from "../../assets/menu.svg?react";
import Add from "../../assets/add.svg?react";
import Like from "../../assets/like.svg?react";
import {useTheme} from "../../hooks";

type Props = {
    /** * Artis name */
    artist: string;
    /** * Song title */
    title: string;
    /** * Song duration */
    duration: string;
};

const PlaylistRow: React.FC<Props> = ({artist, title, duration}) => {
    const {theme} = useTheme();

    return (
        <div className={styles.wrapper}>
            <div className={styles["playlist-info-wrapper"]}>
                {theme === "light" ? <PlayLight /> : <PlayDark />}
                <div className={styles["playlist-info"]}>
                    <div className={styles["artist"]}>{artist}</div>
                    <div className={styles["title"]}>{title}</div>
                </div>
            </div>
            <div className={styles["actions"]}>
                <span>{duration}</span>
                <div>
                    <Menu className={styles.icon} />
                    <Add className={styles.add} />
                </div>
                <Like className={styles.icon} />
            </div>
        </div>
    );
};

export default PlaylistRow;
