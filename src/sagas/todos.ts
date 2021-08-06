import { put, take, fork, select } from 'redux-saga/effects'
import { Action } from 'redux'
import axios from 'axios'
import { TODOS_GET, TODOS_SET_FILTER } from '../constants/ActionTypes'
import { actions } from '../reducers'
import { Todo, ServerAnswer, AppState, TodosFilter, CompletedFilter, TodosParams } from '../model'

const constructParams = (filter: TodosFilter) => {
  const params: TodosParams = {}
  if (filter.title !== '') params['title'] = filter.title
  switch (filter.completed) {
    case CompletedFilter.No:
      params['completed'] = 'false'
      break
    case CompletedFilter.Yes:
      params['completed'] = 'true'
      break
  }
  return params
}

export function* todosSaga() {
  function* getTodos() {
    const state: AppState = yield select()
    const {
      todos: { filter, error }
    } = state
    const params = constructParams(filter)
    const data: Todo[] = yield axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/todos',
      params
    }).then((response: ServerAnswer.Todos) => response.data)

    let errorMessage: string
    if (data.length === 0 && Object.keys(params).length !== 0) errorMessage = 'No result for given search parameters!'
    else errorMessage = ''
    if (error !== errorMessage) yield put(actions.setTodosError(errorMessage))

    yield put(actions.putTodosInStore(data))
  }

  try {
    yield fork(getTodos)

    let outer = true
    while (outer) {
      try {
        const action: Action = yield take([TODOS_GET, TODOS_SET_FILTER])
        yield fork(function* () {
          switch (action.type) {
            case TODOS_GET: {
              yield fork(getTodos)
              break
            }
            case TODOS_SET_FILTER: {
              yield fork(getTodos)
              break
            }
          }
        })
      } catch (e) {
        console.error('Critical error with todos', e)
      }
    }
  } finally {
    console.log('todosSaga saga was finished')
  }
}
