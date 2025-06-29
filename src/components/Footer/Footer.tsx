import React from "react";
import styles from "./footer.module.css";
import SongsFooterIcon from "../../assets/songs-footer-icon.svg?react";
import PlaylistFooterIcon from "../../assets/playlist-footer-icon.svg?react";
import FavoritesFooterIcon from "../../assets/favorites-footer-icon.svg?react";
import {NavLink} from "react-router-dom";
import clsx from "clsx";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <NavLink
                to="/songs"
                className={({isActive}) =>
                    clsx(styles["icon-wrapper"], {[styles.active]: isActive})
                }
            >
                <SongsFooterIcon />
            </NavLink>
            <NavLink
                to="/playlists"
                className={({isActive}) =>
                    clsx(styles["icon-wrapper"], {[styles.active]: isActive})
                }
            >
                <PlaylistFooterIcon />
            </NavLink>
            <NavLink
                to="/favorites"
                className={({isActive}) =>
                    clsx(styles["icon-wrapper"], {[styles.active]: isActive})
                }
            >
                <FavoritesFooterIcon />
            </NavLink>
        </footer>
    );
};

export default Footer;
