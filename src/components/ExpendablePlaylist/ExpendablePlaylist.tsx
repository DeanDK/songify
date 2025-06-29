import React from "react";
import styles from "./expandableList.module.css";
import {useToggle} from "../../hooks/useIsToggle";
import ArrowRight from "../../assets/arrow-right.svg?react";
import RemoveIcon from "../../assets/remove.svg?react";
import clsx from "clsx";
import PlaylistRow from "../PlaylistRow/PlaylistRow.tsx";
import type {Song} from "../../types.ts";
import {usePlaylists} from "../../hooks/usePlaylist.ts";
import {useTheme} from "../../hooks";

type Props = {
    title: string;
    playlistId: string;
    songs: Song[];
    widthClassName: string;
    playlistWidthClassName: string;
    onSelectPlaylist?: () => void;
    onRemoveSelectedSong?: (playlistId: string, songId: string) => void;
};

export const ExpandablePlaylist: React.FC<Props> = ({
    title,
    songs,
    widthClassName,
    playlistWidthClassName,
    onSelectPlaylist,
    onRemoveSelectedSong,
    playlistId
}) => {
    const {theme} = useTheme();
    const [isExpanded, toggle] = useToggle(false);

    const {toggleFavorite, playlists} = usePlaylists();

    const playlist = playlists.find((previous) => previous.id === playlistId);
    const allSongs = playlist?.songs ?? [];

    return (
        <div className={styles.wrapper}>
            <div
                className={styles.header}
                onClick={() => {
                    onSelectPlaylist?.();
                    toggle();
                }}
            >
                <div className={clsx(styles.title, playlistWidthClassName)}>{title}</div>
                <div className={styles.meta}>
                    <span>{allSongs.length} Songs</span>
                    <ArrowRight className={clsx(styles.arrow, {[styles.rotated]: isExpanded})} />
                </div>
            </div>

            <div
                className={clsx(styles.content, {
                    [styles.expanded]: isExpanded
                })}
            >
                {songs.map((song) => (
                    <PlaylistRow
                        key={song.id}
                        artist={song.artist}
                        title={song.title}
                        duration={song.duration}
                        actions={[
                            <RemoveIcon
                                key="remove"
                                fill={theme === "dark" ? "#BBC3C2" : "#163B37"}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onRemoveSelectedSong?.(playlistId, song.id);
                                }}
                            />
                        ]}
                        widthClassName={widthClassName}
                        favorite={song.favourite}
                        onToggleFavourite={() => toggleFavorite(song.id)}
                    />
                ))}
            </div>
        </div>
    );
};
