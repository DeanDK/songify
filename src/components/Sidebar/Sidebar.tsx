import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Sidebar.module.css";
import SongsIcon from "./../../assets/songs.svg?react";
import PlaylistIcon from "./../../assets/playlist.svg?react";
import FavoritesIcon from "./../../assets/favorites.svg?react";
import clsx from "clsx";

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.features}>
                <NavLink
                    to="/songs"
                    className={({isActive}) =>
                        clsx(styles["features-item"], {[styles.active]: isActive})
                    }
                >
                    <SongsIcon className={styles.icon} />
                    <span>Songs</span>
                </NavLink>
                <NavLink
                    to="/playlists"
                    className={({isActive}) =>
                        clsx(styles["features-item"], {[styles.active]: isActive})
                    }
                >
                    <PlaylistIcon className={styles.icon} />
                    <span>Playlists</span>
                </NavLink>
                <NavLink
                    to="/favorites"
                    className={({isActive}) =>
                        clsx(styles["features-item"], {[styles.active]: isActive})
                    }
                >
                    <FavoritesIcon className={styles.icon} />
                    <span>Favourites</span>
                </NavLink>
            </div>
        </aside>
    );
};
