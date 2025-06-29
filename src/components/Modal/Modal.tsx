import React from "react";
import styles from "./modal.module.css";
import CloseIcon from "../../assets/close.svg?react";
import clsx from "clsx";

type Props = {
    /** * Title of the Modal */
    title: string;
    /** * Flag to toggle between open and close state */
    visible: boolean;
    /** * Callback for closing the modal */
    onClose: () => void;
    /** * Content to be rendered inside the modal */
    children: React.ReactNode;
    modelHeightClassName: string;
};

const Modal: React.FC<Props> = ({title, visible, onClose, children, modelHeightClassName}) => {
    if (!visible) return null;

    return (
        <div className={styles.backdrop}>
            <div
                className={clsx(styles.modal, modelHeightClassName)}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles["modal-header"]}>
                    <div className={styles.title}>{title}</div>
                    <CloseIcon className={styles.close} onClick={onClose} />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
