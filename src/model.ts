import { TodosState } from './reducers/todos'

export type AppState = {
  todos: TodosState
  filter: TodosFilter
}

export namespace ServerAnswer {
  export type Todos = {
    data: Todo[]
  }
}

export type TodosParams = {
  title?: string
  completed?: string
}

export type Todo = {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type TodosFilter = {
  title: string
  completed: CompletedFilter
}

export enum CompletedFilter {
  Yes = 'yes',
  No = 'no',
  All = 'all'
}