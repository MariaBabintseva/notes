import { db } from "./db";

export const searchNotes = async (searchValue) => {
    const notes = await db.notes
        .where('title')
        .startsWithIgnoreCase(searchValue)
        .toArray();

    return notes
}


export const addNote = async () => {
    try {
        const id = await db.notes.add({
            title: 'Новая заметка',
            text: 'Текст заметки',
            created_at: new Date()
        });
        return id
    } catch (error) {
        console.error(error)
    }
}

export const removeNote = async (note) => {
    await db.notes.delete(note)
}

export const editNote = async (note, changes) => {
    await db.notes.update(note, changes)
}