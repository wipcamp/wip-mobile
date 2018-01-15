import React from 'react'
import { Provider } from 'react-redux'

import MainNavigator from './Utils/MainNavigator'
import Reducers from './Utils/Reducers'

const store = createStore(Reducers)

const App = () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
)

export default App
