import { Modal } from "antd"
import { useContext } from "react";
import { NotesContext, SelectedNoteContext } from "../services/context";
import { removeNote } from "../services/notes";

export const RemoveModal = ({ isModalOpen, setIsModalOpen }) => {
    const notesList = useContext(NotesContext)
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)

    const handleOk = () => {
        setIsModalOpen(false);
        const targetIndex = notesList.findIndex((item) => item.id === selectedNote);

        removeNote(selectedNote)
        const newNotes = notesList.filter((note) => note.id !== selectedNote);

        if (newNotes.length) {
            const { key } = newNotes[targetIndex === newNotes.length ? targetIndex - 1 : targetIndex];
            setSelectedNote(key);
        }
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