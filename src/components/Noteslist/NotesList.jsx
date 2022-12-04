import { Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import { useContext, useEffect } from "react";
import { NotesContext, SelectedNoteContext } from "../../services/context";
import { ListItem } from "../ListItem/ListItem";
import { NoteContent } from "../NoteContent/NoteContent";
import './NotesList.css'

export const NotesList = () => {
    const notesList = useContext(NotesContext)
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)

    const onChange = (key) => {
        setSelectedNote(key);
    };

    useEffect(() => {
        setSelectedNote(notesList.length > 0 ? notesList[0].id : null)
    }, [])

    return (
        <Content>
            <Tabs
                activeKey={selectedNote}
                onChange={onChange}
                tabPosition={'left'}
                type="card"
                style={{ height: 'calc(100vh - 64px)' }}
                items={notesList?.map((item) => {

                    return {
                        label: <ListItem item={item} />,
                        key: item.id,
                        children: <NoteContent note={item} />,
                    };
                })}
            />
        </Content>
    )
}