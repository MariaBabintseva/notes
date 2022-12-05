import { List } from "antd"
import { useEffect } from "react"
import { useContext, useState } from "react"
import { ContentMobileContext, NotesContext, SelectedNoteContext } from "../../services/context"
import { ContentMobile } from "../ContentMobile/ContentMobile"
import { ListItem } from "../ListItem/ListItem"
import './NotesListMobile.css'

export const NotesListMobile = () => {
    const notesList = useContext(NotesContext)
    const { selectedNote, setSelectedNote } = useContext(SelectedNoteContext)
    const { contentMobile, setContentMobile } = useContext(ContentMobileContext)

    useEffect(() => {
        setSelectedNote(false)
    }, [])

    const selectHandler = (item) => {
        setContentMobile(true)
        setSelectedNote(item.id)
    }

    return (
        <>
            {contentMobile
                ? <ContentMobile />
                : <List
                    bordered
                    className="notes-list_mobile"
                    dataSource={notesList}
                    renderItem={(item) => (
                        <List.Item onClick={() => selectHandler(item)}>
                            <ListItem item={item} />
                        </List.Item>
                    )}
                />
            }
        </>
    )
}