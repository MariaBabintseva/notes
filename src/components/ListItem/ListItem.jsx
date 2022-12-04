import { Space } from 'antd'
import './ListItem.css'

export const ListItem = () => {
    return (
        <div className="list-item" >
            <span className='title-item'>Новая заметка</span>
            <div className='text-item' >
                <Space>
                    <span className='date-item'>16:00</span>
                    <span>Текст заметки</span>
                </Space>

            </div>

        </div>
    )
}