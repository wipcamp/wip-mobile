import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Notifications } from 'expo'

import MainNavigator from './utils/MainNavigator'
import Reducers from './utils/Reducers'
import { SET_INIT } from './ducks/InitState'

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
)
store.dispatch(SET_INIT())

class App extends Component {
  componentWillMount() {
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = (notification) => {
    console.log('notification : ', notification)
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    )
  }
}

export default App
