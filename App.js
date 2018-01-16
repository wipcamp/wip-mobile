import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import MainNavigator from './utils/MainNavigator'
import Reducers from './utils/Reducers'

const store = createStore(Reducers)

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
)

export default App
