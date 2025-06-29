import React, {useState} from "react";
import {Header} from "../../components/Header/Header.tsx";
import {PlaylistActionButton} from "../../components/PlaylistActionButton/PlaylistActionButton.tsx";
import {ExpandablePlaylist} from "../../components/ExpendablePlaylist/ExpendablePlaylist.tsx";
import styles from "./playlist.module.css";
import {useIsMobile} from "../../hooks";
import Modal from "../../components/Modal/Modal.tsx";
import NewPlaylistModal from "../../components/NewPlaylist/NewPlaylist.tsx";
import {useToggle} from "../../hooks/useIsToggle.tsx";
import {v4 as uuidv4} from "uuid";
import {usePlaylists} from "../../hooks/usePlaylist.ts";

const Playlists: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isNewPlaylistOpen, toggleNewPlaylist] = useToggle(false);

    const isMobile = useIsMobile();
    const {playlists, addPlaylist, removeSongFromPlaylist} = usePlaylists();

    const filteredPlaylists = playlists.filter((playlist) =>
        playlist.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleCreatePlaylist = (title: string) => {
        addPlaylist({
            id: uuidv4(),
            title,
            image: "/images/no-image.jpg",
            songs: []
        });

        toggleNewPlaylist();
    };

    return (
        <>
            <Header title="My Playlist" onChange={(e) => setSearchQuery(e.target.value)}>
                <div>
                    <PlaylistActionButton
                        title={isMobile ? "New playlist" : "Create new playlist"}
                        marginTop="35px"
                        onCreatePlaylist={toggleNewPlaylist}
                    />
                    <div className={styles["wrapper"]}>
                        {filteredPlaylists.map((playlist) => (
                            <ExpandablePlaylist
                                key={playlist.id}
                                playlistId={playlist.id}
                                title={playlist.title}
                                songs={playlist.songs}
                                playlistWidthClassName={
                                    isMobile ? styles["width-210"] : styles["width-669"]
                                }
                                widthClassName={
                                    isMobile ? styles["width-150"] : styles["width-630"]
                                }
                                onRemoveSelectedSong={removeSongFromPlaylist}
                            />
                        ))}
                    </div>
                </div>
                <Modal
                    title="New Playlist"
                    visible={isNewPlaylistOpen}
                    onClose={toggleNewPlaylist}
                    modelHeightClassName={styles["height-344"]}
                >
                    <NewPlaylistModal onCreate={handleCreatePlaylist} />
                </Modal>
            </Header>
        </>
    );
};

export default Playlists;
