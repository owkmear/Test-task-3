import { actions as todosActions } from './todos'

export { default as todos } from './todos'

export const actions = {
  ...todosActions
}
