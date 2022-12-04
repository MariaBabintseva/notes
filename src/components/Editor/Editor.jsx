import { Button, Input } from "antd"
import { useCallback, useContext, useEffect, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css";

import { EditContext } from "../../services/context";
import { db } from "../../services/db";
import { editNote } from "../../services/notes";
import { SaveOutlined } from "@ant-design/icons";
import './Editor.css'

export const Editor = ({ note }) => {
    const [title, setTitle] = useState(null)
    const [text, setText] = useState(null)

    const { edit, setEdit } = useContext(EditContext)

    useEffect(() => {
        setTitle(note?.title)
        setText(note?.text)
    }, [note])

    useEffect(() => {
        editNote(note.id, { title: title })
    }, [title])

    const changeTextHandler = useCallback((text) => {
        setText(text);
        editNote(note.id, { text: text })
    }, []);

    const changeTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const saveHandler = () => {
        setEdit(false)
    }

    return (
        <div className="editor">
            <Button
                type="primary"
                icon={<SaveOutlined />}
                size={'default'}
                onClick={saveHandler}
            >
                Сохранить
            </Button>
            <Input className="title-note" value={title} onChange={changeTitleHandler} placeholder="Заголовок" />
            <SimpleMdeReact value={text} onChange={changeTextHandler} />
        </div>
    )
}