import React, { Component } from 'react'
import { View, Switch } from 'react-native'
 
class SwitchButton extends Component {
render() {
    return (
      <View >
        <Switch onSyncPress={value => {false} }/>
      </View>
    )
  }
}

export default SwitchButton