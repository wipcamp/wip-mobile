import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import MainNavigator from './utils/MainNavigator'
import Reducers from './utils/Reducers'
import { SET_INIT } from './ducks/InitState'

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
)
store.dispatch(SET_INIT())

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
)

export default App
