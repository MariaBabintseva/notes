import './NoteContent.css'

export const NoteContent = () => {
    return (
        <div className="note-content">
            <p className='date-content'>04 декабря 2022 в 16:00</p>
            <h1 className='title-content'>Новая заметка</h1>
            <p className='text-content'>Текст заметки</p>
        </div>
    )
}