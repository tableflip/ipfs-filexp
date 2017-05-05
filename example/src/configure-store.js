import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {hashHistory} from 'react-router'
import {routerMiddlware} from 'react-router-redux'

import rootReducer from './reducers'
import rootSaga from './sagas'

export default function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      routerMiddlware(hashHistory),
      sagaMiddleware
    )
  )

  sagaMiddleware.run(rootSaga)

  return store
}
