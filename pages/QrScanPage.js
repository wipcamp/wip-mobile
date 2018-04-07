import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Permissions, BarCodeScanner } from 'expo'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ComponentStyles from '../styles/ComponentStyle'

class QrScan extends Component {
    constructor(props) {
        super(props)
        this.state = {
            permission: null,
            data: null
        }
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({
            permission: status === 'granted'
        })
    }

    render() {
        if (this.state.permission == null) {
            return (
                <View
                    style={[
                        LayoutStyles.flex1,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter,
                        ColorStyles.bgOrange
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.size24,
                            ColorStyles.textWhite
                        ]}
                    >
                        Requesting for camera permission
                    </Text>
                </View>
            )
        }
        else if (this.state.permission == false) {
            return (
                <View
                    style={[
                        LayoutStyles.flex1,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter,
                        ColorStyles.bgOrange
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.size24,
                            ColorStyles.textWhite
                        ]}
                    >
                        No access to camera
                    </Text>
                </View>
            )
        }
        else {
            return (
                <View
                    style={[
                        LayoutStyles.flex1,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter,
                        ColorStyles.bgGrey
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.size25,
                            TextStyles.kanit
                        ]}
                    >
                        Scan QR Code
                    </Text>
                    <BarCodeScanner
                        onBarCodeRead={({ data }) => {
                            if(this.state.data != data) {
                                this.setState({
                                    data: data
                                })
                                this.props.navigation.navigate('ProfileCamp', {id: data})}
                            }
                        }
                        style={ComponentStyles.qrCamera}
                    />
                </View>
            )
        }
    }
}

export default QrScan