import { Button, Input, Space } from "antd"
import { Header } from "antd/es/layout/layout"
import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import './Topbar.css'
import { addNote } from "../../services/notes";
import { RemoveModal } from "../RemoveModal";
import { useContext, useState } from "react";
import { EditContext, SelectedNoteContext } from "../../services/context";

export const Topbar = ({ searchValue, setSearchValue }) => {
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)
    const { edit, setEdit } = useContext(EditContext)
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addHandler = () => {
        addNote()
            .then(id => {
                setSelectedNote(id)
                setEdit(true)
            })
    }

    const removeHandler = () => {
        setIsModalOpen(true)
    }

    const editHandler = () => {
        setEdit(true)
    }

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
    }

    return (
        <>
            <Header
                className="header"
                style={{
                    padding: 0
                }}
            >
                <Space>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        size={'default'}
                        onClick={addHandler}
                    >
                        Новая заметка
                    </Button>
                    <Button
                        type="primary"
                        icon={<DeleteOutlined />}
                        size={'default'}
                        onClick={removeHandler}
                    >
                        Удалить
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size={'default'}
                        onClick={editHandler}
                    >
                        Редактировать
                    </Button>
                    <Input
                        onChange={searchHandler}
                        prefix={<SearchOutlined />}
                        placeholder="Поиск заметок..."
                    />
                </Space>
            </Header>
            <RemoveModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}