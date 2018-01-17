import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import MainNavigator from './utils/MainNavigator'
import Reducers from './utils/Reducers'
import { SET_INIT } from './ducks/InitState'

const store = createStore(Reducers)
store.dispatch(SET_INIT())

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
)

export default App
