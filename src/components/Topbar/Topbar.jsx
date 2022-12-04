import { Button, Input, Space } from "antd"
import { Header } from "antd/es/layout/layout"
import { DeleteOutlined, EditOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import './Topbar.css'

export const Topbar = () => {
    return (
        <>
            <Header
                className="header"
                style={{
                    padding: 0
                }}
            >
                <Space>
                    <Button
                        type="primary"
                        icon={<PlusOutlined />}
                        size={'default'}
                    >
                        Новая заметка
                    </Button>
                    <Button
                        type="primary"
                        icon={<DeleteOutlined />}
                        size={'default'}
                    >
                        Удалить
                    </Button>
                    <Button
                        type="primary"
                        icon={<EditOutlined />}
                        size={'default'}
                    >
                        Редактировать
                    </Button>
                    <Input
                        prefix={<SearchOutlined />}
                        placeholder="Поиск заметок..."
                    />
                </Space>


            </Header>
        </>
    )
}