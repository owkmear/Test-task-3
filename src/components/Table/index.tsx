import { FC, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Table as AntdTable, TableColumnType } from 'antd'
import { AppState, Todo, TodosFilter } from '../../model'
import Message from '../Typography/Message'
import useDebounce from '../../hooks/useDebounce'
import { actions } from '../../reducers'

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
  const dispatch = useDispatch()
  const todosList: Todo[] = useSelector((state: AppState) => state.todos.todosList)
  const filter: TodosFilter = useSelector((state: AppState) => state.todos.filter)
  const error = useSelector((state: AppState) => state.todos.error)

  const debounceFilter = useDebounce(() => {
    dispatch(actions.getTodos())
  }, 400)

  useEffect(() => {
    debounceFilter()
  }, [debounceFilter, filter.title, filter.completed])

  return <>{error ? <Message text={error} /> : <AntdTable bordered dataSource={todosList} columns={columns} size="small" pagination={{ position: ['bottomCenter'] }} />}</>
}

export default Table
