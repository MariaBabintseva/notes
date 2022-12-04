import { Tabs } from "antd";
import { Content } from "antd/es/layout/layout";
import { ListItem } from "../ListItem/ListItem";
import { NoteContent } from "../NoteContent/NoteContent";
import './NotesList.css'

export const NotesList = () => {
    return (
        <Content>
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                type="card"
                style={{ height: 'calc(100vh - 64px)' }}
                items={new Array(3).fill(null).map((_, i) => {
                    const id = String(i + 1);
                    return {
                        label: <ListItem />,
                        key: id,
                        children: <NoteContent />,
                    };
                })}
            />
        </Content>
    )
}