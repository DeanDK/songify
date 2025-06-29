import React, {useState} from "react";
import {Playlists} from "../../components/Playlists/Playlists.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import AddIcon from "../../assets/Add.svg?react";
import {useToggle} from "../../hooks/useIsToggle.tsx";
import Modal from "../../components/Modal/Modal.tsx";
import {ExpandablePlaylist} from "../../components/ExpendablePlaylist/ExpendablePlaylist.tsx";
import {Header} from "../../components/Header/Header.tsx";
import {PlaylistActionButton} from "../../components/PlaylistActionButton/PlaylistActionButton.tsx";
import {useIsMobile} from "../../hooks";
import NewPlaylistModal from "../../components/NewPlaylist/NewPlaylist.tsx";
import styles from "./songs.module.css";
import {v4 as uuidv4} from "uuid";
import {usePlaylists} from "../../hooks/usePlaylist.ts";
import type {Song} from "../../types.ts";

const Songs: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isAddToPlaylistOpen, toggleAddToPlaylist] = useToggle(false);
    const [isNewPlaylistOpen, toggleNewPlaylist] = useToggle(false);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);
    const [selectedSong, setSelectedSong] = useState<Song | null>(null);

    const isMobile = useIsMobile();
    const {playlists, addPlaylist, addSongToPlaylist} = usePlaylists();

    const handleSelectPlaylist = (id: string) => {
        setSelectedPlaylistId(id);
    };

    const handleNewPlaylistClick = () => {
        toggleAddToPlaylist();
        toggleNewPlaylist();
    };

    const handleCreatePlaylist = (title: string) => {
        addPlaylist({
            id: uuidv4(),
            title,
            image: "/images/no-image.jpg",
            songs: []
        });

        toggleNewPlaylist();
    };

    const handleAddIconClick = (song: Song) => {
        setSelectedSong(song);
        toggleAddToPlaylist();
    };

    const handleAddSongToPlaylist = (playlistId: string) => {
        if (selectedSong) {
            addSongToPlaylist(playlistId, selectedSong);
            setSelectedSong(null);
        }
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
                                widthClassName={
                                    isMobile ? styles["width-165"] : styles["width-665"]
                                }
                            />
                        ))}
                    </div>
                </>
            )}

            <Modal
                title="Add To Playlist"
                visible={isAddToPlaylistOpen}
                onClose={toggleAddToPlaylist}
                modelHeightClassName={styles["height-525"]}
            >
                <PlaylistActionButton
                    title="New Playlist"
                    marginTop="62px"
                    onCreatePlaylist={handleNewPlaylistClick}
                />
                <div className={styles["expendable-playlist-wrapper"]}>
                    {playlists.map((playlist) => (
                        <ExpandablePlaylist
                            key={playlist.id}
                            title={playlist.title}
                            songs={playlist.songs.slice(0, 1)}
                            playlistWidthClassName={styles["width-335"]}
                            widthClassName={styles["width-170"]}
                            onSelectPlaylist={() => handleAddSongToPlaylist(playlist.id)}
                        />
                    ))}
                </div>
            </Modal>

            <Modal
                title="New Playlist"
                visible={isNewPlaylistOpen}
                onClose={toggleNewPlaylist}
                modelHeightClassName={styles["height-344"]}
            >
                <NewPlaylistModal onCreate={handleCreatePlaylist} />
            </Modal>
        </Header>
    );
};

export default Songs;
