import { Button, Input } from "antd"
import { useCallback, useContext, useEffect, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor"
import "easymde/dist/easymde.min.css";

import { EditContext } from "../../services/context";
import { db } from "../../services/db";
import { editNote } from "../../services/notes";
import { ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";
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
        editNote(note?.id, { title: title })
    }, [title])

    const changeTextHandler = useCallback((text) => {
        setText(text);
        editNote(note?.id, { text: text })
    }, []);

    const changeTitleHandler = (e) => {
        setTitle(e.target.value)
    }

    const backHandler = () => {
        setEdit(false)
    }

    return (
        <div className="editor">
            <Button
                type="primary"
                className='btn-back'
                icon={<ArrowLeftOutlined />}
                size={'default'}
                onClick={backHandler}
            >
                <span className="label-btn">
                    Назад
                </span>
            </Button>
            <Input className="title-note" value={title} onChange={changeTitleHandler} placeholder="Заголовок" />
            <SimpleMdeReact value={text} onChange={changeTextHandler} />
        </div>
    )
}