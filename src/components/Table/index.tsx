import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Table as AntdTable, TableColumnType } from 'antd'
import { AppState, Todo } from '../../model'
import Message from '../Typography/Message'

const ColumnTitle = ({ text }: { text: string }) => <div style={{ textAlign: 'center', fontWeight: 'bold' }}>{text}</div>

const columns: TableColumnType<Todo>[] = [
  {
    title: <ColumnTitle text="#" />,
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: <ColumnTitle text="Title" />,
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: <ColumnTitle text="Completed" />,
    dataIndex: 'completed',
    key: 'completed',
    render: (value: boolean) => <span>{value ? 'yes' : 'no'}</span>
  }
]

const Table: FC = () => {
  const todosList: Todo[] = useSelector((state: AppState) => state.todos.todosList)
  const error = useSelector((state: AppState) => state.todos.error)

  return <>{error ? <Message text={error} /> : <AntdTable bordered dataSource={todosList} columns={columns} size="small" pagination={{ position: ['bottomCenter'] }} />}</>
}

export default Table
