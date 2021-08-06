import {
  createAction,
  createReducer,
  PayloadAction
} from "typesafe-actions"
import {
  TODOS_GET,
  TODOS_RECEIVED,
  TODOS_SET_FILTER,
  TODOS_SET_ERROR
} from '../constants/ActionTypes'
import { Todo, TodosFilter, CompletedFilter } from '../model'

export type TodosState = {
  todosList: Todo[]
  filter: TodosFilter
  error: string
}

const defaultState: TodosState = {
  todosList: [],
  filter: {
    title: '',
    completed: CompletedFilter.All
  },
  error: ''
}

export const actions = {
  getTodos: createAction(TODOS_GET)<void>(),
  putTodosInStore: createAction(TODOS_RECEIVED)<Todo[]>(),
  setTodosFilter: createAction(TODOS_SET_FILTER)<TodosFilter>(),
  setTodosError: createAction(TODOS_SET_ERROR)<string>()
}

const reducer = createReducer(defaultState)
  .handleAction(
    actions.putTodosInStore,
    (state: TodosState, action: PayloadAction<string, Todo[]>) => {
      return {
        ...state,
        todosList: action.payload
      }
    }
  )
  .handleAction(
    actions.setTodosFilter,
    (state: TodosState, action: PayloadAction<string, TodosFilter>) => {
      return {
        ...state,
        filter: {
          ...state.filter,
          ...action.payload
        }
      }
    }
  )
  .handleAction(
    actions.setTodosError,
    (state: TodosState, action: PayloadAction<string, string>) => {
      return {
        ...state,
        error: action.payload
      }
    }
  )

export default reducer