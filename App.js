import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Notifications, Font } from 'expo'

import MainNavigator from './utils/MainNavigator'
import Reducers from './utils/Reducers'
import { SET_INIT } from './ducks/InitState'

const store = createStore(
  Reducers,
  applyMiddleware(thunk)
)
store.dispatch(SET_INIT())

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadFont: false
    }
  }

  componentWillMount() {
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Kanit': require('./src/fonts/Kanit-Regular.ttf'),
    })

    this.setState({ loadFont: true })
  }

  _handleNotification = (notification) => {
    console.log('notification : ', notification)
  }

  render() {
    return (
      <Provider store={store}>
        { this.state.loadFont
          ? <MainNavigator />
          : <View
              style={{
                flex: 1,
                alignItems: 'center'
              }}
            >
              <Text>loading font</Text>
            </View>
        }
      </Provider>
    )
  }
}

export default App
