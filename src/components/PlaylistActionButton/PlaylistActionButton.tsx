import styles from "./playlistActionButton.module.css";
import React from "react";

type Props = {
    title: string;
    marginTop: string;
};

export const PlaylistActionButton: React.FC<Props> = ({title, marginTop}) => {
    return (
        <div className={styles["playlist-action-header"]} style={{marginTop: marginTop}}>
            <div className={styles["playlist-action"]}>{title}</div>
        </div>
    );
};
