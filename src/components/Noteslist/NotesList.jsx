import { Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import { useContext, useEffect } from "react";
import { EditContext, NotesContext, SelectedNoteContext } from "../../services/context";
import { ListItem } from "../ListItem/ListItem";
import { NoteContent } from "../NoteContent/NoteContent";
import { NotesListMobile } from "../NotesListMobile/NotesListMobile";
import './NotesList.css'

export const NotesList = () => {
    const notesList = useContext(NotesContext)
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)
    const { edit, setEdit } = useContext(EditContext)

    const onChange = (key) => {
        setSelectedNote(key);
        setEdit(false)
    };

    useEffect(() => {
        setSelectedNote(notesList.length > 0 ? notesList[0].id : null)
    }, [])



    return (
        <Content>
            {notesList.length === 0
                ? <div className="empty-list">Пока нет ни одной заметки</div>
                : <>
                    <NotesListMobile />
                    <Tabs
                        activeKey={selectedNote}
                        onChange={onChange}
                        className='notes-list'
                        tabPosition={'left'}
                        type="card"
                        items={notesList?.sort((a, b) => b.created_at - a.created_at).map((item) => {

                            return {
                                label: <ListItem item={item} />,
                                key: item.id,
                                children: <NoteContent note={item} />,
                            };
                        })}
                    />
                </>
            }

        </Content>
    )
}