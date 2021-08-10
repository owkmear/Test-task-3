import { AppState, CompletedFilter, Todo, TodosFilter } from '../../model'
import { defaultState as todoDefaultState } from '../../reducers/todos'

export const todoList: Todo[] = [
  {
    completed: true,
    id: 19,
    title: 'Title 1',
    userId: 1
  },
  {
    completed: false,
    id: 20,
    title: 'Title 2',
    userId: 1
  },
  {
    completed: true,
    id: 21,
    title: 'Title 3',
    userId: 2
  }
]

export const todoFilter: TodosFilter = {
  title: 'Check emails',
  completed: CompletedFilter.No
}

export const todoError: string = 'No result for given search parameters!'

export const storeDefaultState: AppState = {
  todos: todoDefaultState
}
