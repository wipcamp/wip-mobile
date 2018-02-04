import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'


import Styles from '../styles/MockViewAProblemStyle'

class AProblem extends Component {
    static navigationOptions = {
        title: 'Details'
    }
    
    constructor(props) {
        super(props);
        this.state = {
          switch: false
        }
    }
    

    render() {
        var notSlovedBox = this.state.switch ? Styles.boxGray : Styles.boxWhite
        var slovedBox = this.state.switch ? Styles.boxWhite : Styles.boxGray
        var switchTextY = this.state.switch ? Styles.text : Styles.textBold
        var switchTextN = this.state.switch ? Styles.textBold : Styles.text

        return (
            <View style={[ Styles.bg , Styles.spaces ]}>

                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                    <Text style={ Styles.text }>  Topic Name</Text>
                </View >
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border ]}>
                    <Text style={ Styles.text }>  Category</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces ]}>
                    <Text style={ Styles.text }>  Date</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces ]}>
                    <Text style={ Styles.textBold }>  Detail</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces ]}>
                    <Text style={ Styles.text }>  Reporter</Text>
                </View>
                <View style={[ slovedBox, Styles.topicWhite, Styles.spaces, Styles.rigthSwitch ]}>
                    <Text style={ switchTextY }>Solved</Text>
                    <Switch 
                        onValueChange={(value) => this.setState({ switch: value })}
                        value={ this.state.switch }
                    />
                </View>
                <View style={[ notSlovedBox, Styles.topicWhite, Styles.rigthSwitch ]}>
                    <Text style={ switchTextN }>Not solved</Text>
                    <Switch
                        onValueChange={(value) => !this.setState({ switch: !value })}
                        value={ !this.state.switch }
                    />
                </View>
                
                
            </View>
        )
    }
}

export default AProblem

