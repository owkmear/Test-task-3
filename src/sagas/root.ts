import { spawn } from 'redux-saga/effects'
import { todosSaga } from './todos'

const sagas: { [index: string]: any } = {
  todos: todosSaga
}

export function* rootSaga() {
  for (const name in sagas) {
    yield spawn(sagas[name])
  }
}
