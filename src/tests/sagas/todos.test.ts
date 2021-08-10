import { expectSaga } from 'redux-saga-test-plan'
import { todosSaga } from '../../sagas/todos'
import rootReducer from '../../store/root-reducer'
import { todoList, storeDefaultState } from '../mock'
import { actions } from '../../reducers/todos'

describe('Todos saga', () => {
  it('todosSaga operations with todo', () => {
    const finalState = {
      ...storeDefaultState,
      todos: {
        ...storeDefaultState.todos,
        todosList: todoList
      }
    }

    return expectSaga(todosSaga).withState(storeDefaultState).withReducer(rootReducer).dispatch(actions.getTodos()).hasFinalState(finalState).run()
  })
})
