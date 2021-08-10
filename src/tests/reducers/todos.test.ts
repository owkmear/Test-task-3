import todosReducer, { defaultState } from '../../reducers/todos'
import { TODOS_RECEIVED, TODOS_SET_FILTER, TODOS_SET_ERROR } from '../../constants/ActionTypes'
import { todoList, todoFilter, todoError } from '../mock'

describe('Todos reducer', () => {
  describe('Actions', () => {
    it(TODOS_RECEIVED, () => {
      const action = {
        type: TODOS_RECEIVED,
        payload: todoList
      }
      expect(todosReducer(defaultState, action)).toEqual({
        ...defaultState,
        todosList: todoList
      })
    })

    it(TODOS_SET_FILTER, () => {
      const action = {
        type: TODOS_SET_FILTER,
        payload: todoFilter
      }
      expect(todosReducer(defaultState, action)).toEqual({
        ...defaultState,
        filter: todoFilter
      })
    })

    it(TODOS_SET_ERROR, () => {
      const action = {
        type: TODOS_SET_ERROR,
        payload: todoError
      }
      expect(todosReducer(defaultState, action)).toEqual({
        ...defaultState,
        error: todoError
      })
    })
  })
})
