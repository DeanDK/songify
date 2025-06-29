import React, {useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import AddIcon from "../../assets/Add.svg?react";
import styles from "./favorites.module.css";
import {useIsMobile} from "../../hooks";
import {usePlaylists} from "../../hooks/usePlaylist.ts";
import AddToPlaylistModal from "../../components/AddNewPlaylist/AddNewPlaylist.tsx";
import type {Song} from "../../types.ts";
import {useToggle} from "../../hooks/useIsToggle.tsx";

const Favorites: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);

    const isMobile = useIsMobile();
    const [isNewPlaylistOpen, toggleNewPlaylist] = useToggle(false);
    const [isAddToPlaylistOpen, toggleAddToPlaylist] = useToggle(false);
    const {playlists, toggleFavorite, favoriteSongs, addPlaylist, addSongToPlaylist} =
        usePlaylists();

    const uniqueFavoriteSongs = Array.from(
        new Map(favoriteSongs.map((song) => [song.id, song])).values()
    );

    const filteredFavorites = uniqueFavoriteSongs.filter(
        (song) =>
            song.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleAddIconClick = (song: Song) => {
        setSelectedSong(song);
        toggleAddToPlaylist();
    };

    return (
        <>
            <Header title="Favorites" onChange={(e) => setSearchQuery(e.target.value)} />
            <div className={styles.wrapper}>
                {filteredFavorites.map((song) => (
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
                        widthClassName={isMobile ? styles["width-170"] : styles["width-665"]}
                        favorite={song.favourite}
                        onToggleFavourite={() => toggleFavorite(song.id)}
                    />
                ))}
            </div>
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
        </>
    );
};

export default Favorites;
