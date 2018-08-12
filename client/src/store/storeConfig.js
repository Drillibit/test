import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas'
import AddGroupReducer from '../reducers/AddGroupReducer'
import AddItemReducer from '../reducers/AddItemReducer'

const sagaMiddleware = createSagaMiddleware()
export default () => {
  const store = createStore(
    combineReducers({
      groups: AddGroupReducer,
      items: AddItemReducer
    }),
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  sagaMiddleware.run(rootSaga)
  return store
}
