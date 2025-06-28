import React from "react";
import styles from "./playlistRow.module.css";
import PlayLight from "../../assets/play-light.svg?react";
import PlayDark from "../../assets/play-dark.svg?react";
import Like from "../../assets/like.svg?react";
import {useTheme} from "../../hooks";

type Props = {
    artist: string;
    title: string;
    duration: string;
    actions: React.ReactNode[];
    width: string;
};

const PlaylistRow: React.FC<Props> = ({artist, title, duration, actions, width}) => {
    const {theme} = useTheme();

    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles["playlist-info-wrapper"]}>
                    {theme === "light" ? <PlayLight /> : <PlayDark />}
                    <div className={styles["playlist-info"]} style={{width: width}}>
                        <div className={styles["artist"]}>{artist}</div>
                        <div className={styles["title"]}>{title}</div>
                    </div>
                </div>
                <div className={styles["actions"]}>
                    <span>{duration}</span>
                    <div>{actions}</div>
                    <Like className={styles.icon} />
                </div>
            </div>
        </>
    );
};

export default PlaylistRow;
