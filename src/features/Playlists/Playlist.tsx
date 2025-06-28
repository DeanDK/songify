import React from "react";
import {Header} from "../../components/Header/Header.tsx";
import {PlaylistActionButton} from "../../components/PlaylistActionButton/PlaylistActionButton.tsx";
import {playlists} from "../../utils/playlists.ts";
import {ExpandablePlaylist} from "../../components/ExpendablePlaylist/ExpendablePlaylist.tsx";
import styles from "./playlist.module.css";

const Playlists: React.FC = () => {
    return (
        <>
            <Header title="My Playlist" />
            <div>
                <PlaylistActionButton title="Create new playlist" marginTop="35px" />
                <div className={styles["wrapper"]}>
                    {playlists.map((playlist) => (
                        <ExpandablePlaylist
                            key={playlist.id}
                            title={playlist.title}
                            songs={playlist.songs}
                            width="699px"
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Playlists;
