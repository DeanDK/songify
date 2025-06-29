import React from "react";
import styles from "./playlists.module.css";
import {type Playlist} from "../../utils/playlists.ts";

type Props = {
    onSelect: (id: string) => void;
    playlists: Playlist[];
};

export const Playlists: React.FC<Props> = ({onSelect, playlists}) => {
    return (
        <div className={styles.wrapper}>
            {playlists.map((playlist) => (
                <div
                    key={playlist.id}
                    className={styles.card}
                    onClick={() => onSelect(playlist.id)}
                >
                    <img src={playlist.image} alt={playlist.title} className={styles.image} />
                    <div className={styles.info}>
                        <div className={styles.titleText}>{playlist.title}</div>
                        <div className={styles.songCount}>{playlist.songs.length} Songs</div>
                    </div>
                </div>
            ))}
        </div>
    );
};
