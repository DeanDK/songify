import React, {useState} from "react";
import clsx from "clsx";
import styles from "./playlistRow.module.css";
import LikeIcon from "../../assets/like.svg?react";
import PlayoffIcon from "../../assets/play-off.svg?react";
import LikeFilledIcon from "../../assets/like-filled.svg?react";
import {useTheme} from "../../hooks";

type Props = {
    artist: string;
    title: string;
    duration: string;
    actions: React.ReactNode[];
    widthClassName?: string;
    favorite: boolean;
    onToggleFavourite: () => void;
};

const PlaylistRow: React.FC<Props> = ({
    artist,
    title,
    duration,
    actions,
    widthClassName,
    favorite,
    onToggleFavourite
}) => {
    const {theme} = useTheme();

    const isDark = theme === "dark";
    const [pulsing, setPulsing] = useState(false);

    const handleClick = () => {
        setPulsing(true);
        onToggleFavourite();
        setTimeout(() => setPulsing(false), 400);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles["playlist-info-wrapper"]}>
                <PlayoffIcon fill={isDark ? "white" : "#163B37"} />
                <div className={clsx(styles["playlist-info"], widthClassName)}>
                    <div className={styles["artist"]}>{artist}</div>
                    <div className={styles["title"]}>{title}</div>
                </div>
            </div>
            <div className={styles["actions"]}>
                <span>{duration}</span>
                <div>{actions}</div>
                <div className={clsx({[styles.pulse]: pulsing})} onClick={handleClick}>
                    {favorite ? (
                        <LikeFilledIcon className={styles.icon} />
                    ) : (
                        <LikeIcon className={styles.icon} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaylistRow;
