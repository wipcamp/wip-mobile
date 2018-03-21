import React, { Component } from 'react'
import { View, Image, Button, NetInfo } from 'react-native'

import NoInternet from '../src/images/Logo_WIPCamp.png'

import Styles from '../styles/ErrorPageStyle'

class InternetNotFound extends Component {
    constructor(props) {
        super(props)
        this.state = {
            canClick: false
        }
    }

    componentWillMount() {
        NetInfo.addEventListener(
            'connectionChange',
            (connectionInfo) => {
                connectionInfo.type != 'none'
                    ? this.setState({canClick: true})
                    : this.setState({canClick: false})
            }
        )
    }

    render() {
        return(
            <View style={Styles.container}>
                <Image
                    source={NoInternet}
                />
                <Button
                    title="Retry"
                    onPress={() => this.props.navigation.goBack()}
                    disabled={this.state.canClick}
                />
            </View>
        )
    }
}

export default InternetNotFound