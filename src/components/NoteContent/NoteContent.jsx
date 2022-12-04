import { formatDateContent } from '../../services/formatDate'
import './NoteContent.css'

export const NoteContent = ({ note }) => {
    return (
        <div className="note-content">
            {note.created_at &&
                <p className='date-content'>{formatDateContent(note.created_at)}</p>}
            <h1 className='title-content'>{note.title}</h1>
            <p className='text-content'>{note.text}</p>
        </div>
    )
}