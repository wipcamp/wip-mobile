import React, { Component } from 'react'
import { AsyncStorage, Dimensions, View, Text, Image } from 'react-native'

import WipLogo from '../src/images/WIPX.png'

const width = Dimensions.get('screen').width

class Loading extends Component {
    componentDidMount() {
        this._fetchAuth()
    }

    _fetchAuth = async () => {
        const result = await AsyncStorage.getItem('loginFBID')
        this.props.navigation.navigate(result ? 'app' : 'auth')
    }

    render() {
        return (
            <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#EFEFEF'
            }}>
                <Image
                    source={WipLogo}
                    style={{
                        width: width * 0.8,
                        height: width * 0.8
                    }}
                />
            </View>
        )
    }
}

export default Loading