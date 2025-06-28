import React, {useState} from "react";
import {Playlists} from "../../components/Playlists/Playlists.tsx";
import PlaylistRow from "../../components/PlaylistRow/PlaylistRow.tsx";
import {playlists} from "../../utils/playlists.ts";
import styles from "./songs.module.css";
import AddIcon from "../../assets/Add.svg?react";
import {useToggle} from "../../hooks/useIsToggle.tsx";
import Modal from "../../components/Modal/Modal.tsx";
import {ExpandablePlaylist} from "../../components/ExpendablePlaylist/ExpendablePlaylist.tsx";
import {Header} from "../../components/Header/Header.tsx";
import {PlaylistActionButton} from "../../components/PlaylistActionButton/PlaylistActionButton.tsx";

const Songs: React.FC = () => {
    const [isModalOpen, toggleModal] = useToggle(false);
    const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(null);

    const handleSelectPlaylist = (id: string) => {
        setSelectedPlaylistId(id);
    };

    const selectedPlaylist = playlists.find((playlist) => playlist.id === selectedPlaylistId);

    return (
        <Header title="Featured Playlist">
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
                                actions={[
                                    <AddIcon className={styles.icon} onClick={toggleModal} />
                                ]}
                                width="665px"
                            />
                        ))}
                    </div>
                </>
            )}
            <Modal title="Add To Playlist" visible={isModalOpen} onClose={toggleModal}>
                <PlaylistActionButton title="New Playlist" marginTop="62px" />
                <div className={styles["expendable-playlist-wrapper"]}>
                    {playlists.map((playlist) => (
                        <ExpandablePlaylist
                            key={playlist.id}
                            title={playlist.title}
                            songs={playlist.songs}
                            width="335px"
                        />
                    ))}
                </div>
            </Modal>
        </Header>
    );
};

export default Songs;
