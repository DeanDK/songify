import React, {useState} from "react";
import {Playlists} from "../../components/Playlists/Playlists.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import AddIcon from "../../assets/Add.svg?react";
import {useToggle} from "../../hooks/useIsToggle.tsx";
import {Header} from "../../components/Header/Header.tsx";
import {useIsMobile} from "../../hooks";
import styles from "./songs.module.css";
import {usePlaylists} from "../../hooks/usePlaylist.ts";
import type {Song} from "../../types.ts";
import AddToPlaylistModal from "../../components/AddNewPlaylist/AddNewPlaylist.tsx";

const Songs: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);

    const isMobile = useIsMobile();
    const {playlists, toggleFavorite, addPlaylist, addSongToPlaylist} = usePlaylists();
    const [isNewPlaylistOpen, toggleNewPlaylist] = useToggle(false);
    const [isAddToPlaylistOpen, toggleAddToPlaylist] = useToggle(false);

    const handleSelectPlaylist = (id: string) => {
        setSelectedPlaylistId(id);
    };

    const handleAddIconClick = (song: Song) => {
        setSelectedSong(song);
        toggleAddToPlaylist();
    };

    const selectedPlaylist = playlists.find((playlist) => playlist.id === selectedPlaylistId);

    const filteredSongs = (selectedPlaylist?.songs || []).filter(
        (song) =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <Header title="Featured Playlist" onChange={(e) => setSearchQuery(e.target.value)}>
            <Playlists playlists={playlists} onSelect={handleSelectPlaylist} />
            {selectedPlaylist && (
                <>
                    <div className={styles["recommended"]}>Recommended</div>
                    <div className={styles["playlist-row"]}>
                        {filteredSongs?.map((song) => (
                            <PlaylistRow
                                key={song.id}
                                artist={song.artist}
                                title={song.title}
                                duration={song.duration}
                                actions={[
                                    <AddIcon
                                        className={styles.icon}
                                        onClick={() => handleAddIconClick(song)}
                                    />
                                ]}
                                favorite={song.favourite}
                                onToggleFavourite={() => toggleFavorite(song.id)}
                                widthClassName={
                                    isMobile ? styles["width-165"] : styles["width-665"]
                                }
                            />
                        ))}
                    </div>
                </>
            )}
            <AddToPlaylistModal
                playlists={playlists}
                selectedSong={selectedSong}
                onToggleNewPlaylist={toggleNewPlaylist}
                isAddToPlaylistOpen={isAddToPlaylistOpen}
                isNewPlaylistOpen={isNewPlaylistOpen}
                onToggleAddToPlaylist={toggleAddToPlaylist}
                onAddPlaylist={addPlaylist}
                onAddSongToPlaylist={addSongToPlaylist}
                onSetSelectedSong={setSelectedSong}
            />
        </Header>
    );
};

export default Songs;
