import React, {useState} from "react";
import {SearchBar} from "../../components/SearchBar/SearchBar.tsx";
import {Toggle} from "../../components/Toggle/Toggle.tsx";
import {Playlists} from "../../components/Playlists/Playlists.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import {playlists} from "../../utils/playlists.ts";
import styles from "./songs.module.css";

const Songs: React.FC = () => {
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

    const handleSelectPlaylist = (id: string) => {
        setSelectedPlaylistId(id);
    };

    const selectedPlaylist = playlists.find((p) => p.id === selectedPlaylistId);

    return (
        <>
            <div className={styles.header}>
                <SearchBar />
                <Toggle />
            </div>
            <div className={styles["featured-playlist"]}>Featured Playlist</div>
            <Playlists onSelect={handleSelectPlaylist} />
            {selectedPlaylist && (
                <>
                    <div className={styles["recommended"]}>Recommended</div>
                    <div className={styles["playlist-row"]}>
                        {selectedPlaylist.songs.map((song) => (
                            <PlaylistRow
                                key={song.id}
                                artist={song.artist}
                                title={song.title}
                                duration={song.duration}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Songs;
