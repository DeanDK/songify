import React from "react";
import styles from "./expandableList.module.css";
import {useToggle} from "../../hooks/useIsToggle";
import ArrowRight from "../../assets/arrow-right.svg?react";
import RemoveIcon from "../../assets/remove.svg?react";
import clsx from "clsx";
import PlaylistRow from "../PlaylistRow/PlaylistRow.tsx";
import type {Song} from "../../types.ts";

type Props = {
    title: string;
    songs: Song[];
    widthClassName: string;
    playlistWidthClassName: string;
    onSelectPlaylist?: () => void;
};

export const ExpandablePlaylist: React.FC<Props> = ({
    title,
    songs,
    widthClassName,
    playlistWidthClassName,
    onSelectPlaylist
}) => {
    const [isExpanded, toggle] = useToggle(false);

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
                    <span>{songs.length} Songs</span>
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
                        actions={[<RemoveIcon />]}
                        widthClassName={widthClassName}
                    />
                ))}
            </div>
        </div>
    );
};
