import React, { Component } from 'react'
import { View, NetInfo } from 'react-native'

const checknet = EnchangeComponent => class CheckNet extends Component {
    componentWillMount() {
        NetInfo.addEventListener(
            'connectionChange',
            (connectionInfo) => {
                if(connectionInfo.type == 'none') {
                    this.props.navigation.navigate('InternetNotFound')
                }
            }
        )
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <EnchangeComponent {...this.props} />
            </View>
        )
    }
}

export default checknet