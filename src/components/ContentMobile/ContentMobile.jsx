import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useContext } from 'react'
import { ContentMobileContext, EditContext, NotesContext, SelectedNoteContext } from '../../services/context'
import { NoteContent } from '../NoteContent/NoteContent'
import './ContentMobile.css'

export const ContentMobile = () => {
    const notesList = useContext(NotesContext)
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)
    const { edit, setEdit } = useContext(EditContext)
    const { contentMobile, setContentMobile } = useContext(ContentMobileContext)
    const note = notesList.find((item) => item.id === selectedNote)

    const backHandler = () => {
        setContentMobile(false)
        setEdit(false)
    }

    return (
        <div className='content-mobile'>
            {!edit &&
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
                </Button>}
            <NoteContent note={note} />
        </div>
    )
}