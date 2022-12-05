import { Space } from 'antd'
import { formatDateItem } from '../../services/formatDate'
import './ListItem.css'

export const ListItem = ({ item }) => {
    return (
        <div className="list-item">
            <span className='title-item'>{item.title}</span>
            <div className='text-item' >
                <Space>
                    {item.created_at &&
                        <span className='date-item'>{formatDateItem(item.created_at)}</span>}
                    <span>{item.text}</span>
                </Space>

            </div>

        </div>
    )
}