import React from "react";
import {Link} from "react-router-dom";
import styles from "./Sidebar.module.css";
import SongsIcon from "./../../assets/songs.svg?react";
import PlaylistIcon from "./../../assets/playlist.svg?react";
import FavoritesIcon from "./../../assets/favorites.svg?react";

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.features}>
                <Link to="/songs" className={styles["features-item"]}>
                    <SongsIcon className={styles.icon} />
                    <span>Songs</span>
                </Link>
                <Link to="/playlists" className={styles["features-item"]}>
                    <PlaylistIcon className={styles.icon} />
                    <span>Playlists</span>
                </Link>
                <Link to="/favourites" className={styles["features-item"]}>
                    <FavoritesIcon className={styles.icon} />
                    <span>Favourites</span>
                </Link>
            </div>
        </aside>
    );
};
