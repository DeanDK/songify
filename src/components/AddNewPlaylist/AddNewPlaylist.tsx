import React from "react";
import Modal from "../../components/Modal/Modal.tsx";
import {ExpandablePlaylist} from "../ExpendablePlaylist/ExpendablePlaylist.tsx";
import {PlaylistActionButton} from "../PlaylistActionButton/PlaylistActionButton.tsx";
import styles from "./addNewPlaylist.module.css";
import NewPlaylistModal from "../NewPlaylist/NewPlaylist.tsx";
import {v4 as uuidv4} from "uuid";
import type {Song} from "../../types.ts";
import type {Playlist} from "../../utils/playlists.ts";

interface AddToPlaylistModalProps {
    playlists: Playlist[];
    onToggleNewPlaylist: () => void;
    selectedSong: Song | null;
    onSetSelectedSong: (song: Song | null) => void;
    onToggleAddToPlaylist: () => void;
    isAddToPlaylistOpen: boolean;
    isNewPlaylistOpen: boolean;
    onAddPlaylist: (song: Playlist) => void;
    onAddSongToPlaylist: (playlistId: string, song: Song) => void;
}

export const AddToPlaylistModal: React.FC<AddToPlaylistModalProps> = ({
    playlists,
    onToggleNewPlaylist,
    selectedSong,
    isAddToPlaylistOpen,
    onToggleAddToPlaylist,
    isNewPlaylistOpen,
    onAddPlaylist,
    onAddSongToPlaylist,
    onSetSelectedSong
}) => {
    const handleNewPlaylistClick = () => {
        onToggleAddToPlaylist();
        onToggleNewPlaylist();
    };

    const handleAddSongToPlaylist = (playlistId: string) => {
        if (selectedSong) {
            onAddSongToPlaylist(playlistId, selectedSong);
        }
    };

    const handleCreatePlaylist = (title: string) => {
        onAddPlaylist({
            id: uuidv4(),
            title,
            image: "/images/no-image.jpg",
            songs: []
        });

        onToggleNewPlaylist();
    };

    return (
        <>
            <Modal
                title="Add To Playlist"
                visible={isAddToPlaylistOpen}
                onClose={onToggleAddToPlaylist}
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
                            playlistId={playlist.id}
                            songs={selectedSong ? [selectedSong] : []}
                            playlistWidthClassName={styles["width-335"]}
                            widthClassName={styles["width-170"]}
                            onSelectPlaylist={() => handleAddSongToPlaylist(playlist.id)}
                            onRemoveSelectedSong={() => onSetSelectedSong(null)}
                        />
                    ))}
                </div>
            </Modal>
            <Modal
                title="New Playlist"
                visible={isNewPlaylistOpen}
                onClose={onToggleNewPlaylist}
                modelHeightClassName={styles["height-344"]}
            >
                <NewPlaylistModal onCreate={handleCreatePlaylist} />
            </Modal>
        </>
    );
};

export default AddToPlaylistModal;
