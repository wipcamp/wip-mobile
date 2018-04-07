import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, NetInfo } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'
import ComponentStyles from '../styles/ComponentStyle'

import NoInternet from '../src/images/wippo_sad.png'

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
            <View
                style={[
                    LayoutStyles.flex1,
                    LayoutStyles.alignCenter,
                    LayoutStyles.justifyCenter,
                    ColorStyles.bgOrange
                ]}
            >
                <Image
                    source={NoInternet}
                    style={ImageStyles.imgNoInternet}
                />
                <Text
                    style={[
                        LayoutStyles.padTB10,
                        TextStyles.kanit,
                        TextStyles.size24,
                        TextStyles.center,
                        ColorStyles.textWhite
                    ]}
                >
                    No Internet Connection
                </Text>
                <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    disabled={this.state.canClick}
                    style={[
                        LayoutStyles.maTop5,
                        ColorStyles.bgWhite,
                        ComponentStyles.button
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size18,
                            ColorStyles.textOrange
                        ]}
                    >
                        ลองอีกครั้ง
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default InternetNotFound