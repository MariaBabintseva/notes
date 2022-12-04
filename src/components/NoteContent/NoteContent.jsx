import { useContext } from 'react'
import { EditContext } from '../../services/context'
import { formatDateContent } from '../../services/formatDate'
import { Editor } from '../Editor/Editor'
import './NoteContent.css'

export const NoteContent = ({ note }) => {
    const { edit, setEdit } = useContext(EditContext)

    return (
        <>
            {edit
                ? <Editor note={note} />
                : <div className="note-content">
                    {note.created_at &&
                        <p className='date-content'>{formatDateContent(note.created_at)}</p>}
                    <h1 className='title-content'>{note.title}</h1>
                    <p className='text-content'>{note.text}</p>
                </div>
            }
        </>

    )
}