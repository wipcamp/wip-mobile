import React, { Component } from 'react'
import { View, Switch, StyleSheet} from 'react-native'
 
class HomeContainer extends Component {
    constructor() {
       super();
       this.state = {
          switch1Value: false,
          switch2Value: false,
       }
    }
    toggleSwitch1 = (value) => {
       this.setState({switch1Value: value})
       console.log('Switch 1 is: ' + value)
    }
    toggleSwitch2 = (value) => {
       this.setState({switch2Value: value})
       console.log('Switch 2 is: ' + value)
    }
    render() {
       return (
          <View>
             <SwitchExample
                toggleSwitch1 = {this.toggleSwitch1}
                toggleSwitch2 = {this.toggleSwitch2}
                switch1Value = {this.state.switch1Value}
                switch2Value = {this.state.switch2Value}/>
          </View>
       );
    }
 }
 const SwitchExample = (props) => {
    return (
       <View style = {styles.container}>
          <Switch
             onValueChange = {props.toggleSwitch1}
             value = {props.switch1Value}/>
          <Switch
             onValueChange = {props.toggleSwitch2}
             value = {props.switch2Value}/>
       </View>
    )
 }
 const styles = StyleSheet.create ({
    container: {
       flex: 1,
       alignItems: 'center',
       marginTop: 100
    }
 })
 export default connect(HomeContainer)(SwitchExample)