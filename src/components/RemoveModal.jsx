import { Modal } from "antd"
import { useContext } from "react";
import { SelectedNoteContext } from "../services/context";
import { removeNote } from "../services/notes";

export const RemoveModal = ({ isModalOpen, setIsModalOpen }) => {
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)

    const handleOk = () => {
        setIsModalOpen(false);
        removeNote(selectedNote)
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Вы действительно хотите удалить заметку?</p>

        </Modal>
    )
}