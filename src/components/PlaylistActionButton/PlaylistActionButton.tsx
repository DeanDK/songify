import styles from "./playlistActionButton.module.css";
import React from "react";

type Props = {
    title: string;
    marginTop: string;
    onCreatePlaylist?: () => void;
};

export const PlaylistActionButton: React.FC<Props> = ({title, marginTop, onCreatePlaylist}) => {
    return (
        <div
            className={styles["playlist-action-header"]}
            style={{marginTop: marginTop}}
            onClick={onCreatePlaylist}
        >
            <div className={styles["playlist-action"]}>{title}</div>
        </div>
    );
};
