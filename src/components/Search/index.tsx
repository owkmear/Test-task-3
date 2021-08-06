import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Input, Select, Form, Row, Col } from 'antd'
import { AppState, TodosFilter, CompletedFilter } from '../../model'
import { actions } from '../../reducers'

const { Option } = Select

const completedOptions: { value: CompletedFilter, label: string }[] = [
  {
    value: CompletedFilter.All,
    label: '-'
  },
  {
    value: CompletedFilter.Yes,
    label: 'Yes'
  },
  {
    value: CompletedFilter.No,
    label: 'No'
  }
]

const Table: FC = () => {
  const filter: TodosFilter = useSelector((state: AppState) => state.todos.filter)
  const dispatch = useDispatch()

  const setFilter = (filter: TodosFilter) => {
    dispatch(actions.setTodosFilter(filter))
  }

  return (
    <>
      <Form layout="horizontal">
        <Row gutter={20}>
          <Col xs={24} sm={12}>
            <Form.Item label="Search:">
              <Input value={filter.title} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, title: e.target.value })} placeholder="keyword..." />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Completed:">
              <Select value={filter.completed} onChange={(value: CompletedFilter) => setFilter({ ...filter, completed: value })} defaultValue={CompletedFilter.All}>
                {completedOptions.map((option) => (
                  <Option value={option.value}>{option.label}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Table
