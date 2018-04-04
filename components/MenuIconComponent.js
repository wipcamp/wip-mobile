import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'
import ComponentStyles from '../styles/ComponentStyle'

class MenuIcon extends Component {
    render() {
        return (
            <TouchableOpacity
                style={ this.__renderStyle() }
                onPress={this.props.function}
            >
                <Image
                    source={this.props.icon}
                    style={ this.__renderImageStyle() }
                />
                <Text
                    style={ this.__renderTextStyle() }
                >
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }

    __renderStyle() {
        let styles = [
            LayoutStyles.row,
            LayoutStyles.alignCenter,
            LayoutStyles.radius,
            ColorStyles.bgWhite,
            ColorStyles.borderBotBlack05
        ]
        let styles2 = []
        if (this.props.two) {
            styles2 = [
                LayoutStyles.flex09,
                LayoutStyles.row,
                LayoutStyles.justifyAround
            ]
        }
        else {
            styles2 = [
                LayoutStyles.flex045,
                LayoutStyles.column,
                LayoutStyles.justifyCenter
            ]
        }
        return [...styles, ...styles2]
    }

    __renderImageStyle() {
        let styles = []
        if (this.props.two) {
            styles = [
                LayoutStyles.left95,
                ImageStyles.mainIcon
            ]
        }
        else {
            styles = [
                LayoutStyles.maBot5,
                ImageStyles.mainIconS
            ]
        }
        return styles
    }

    __renderTextStyle() {
        let styles = [
            TextStyles.kanit
        ]
        let styles2 = []
        if (this.props.two) {
            styles2 = [
                LayoutStyles.right95,
                TextStyles.size25
            ]
        }
        else {
            styles2 = [
                LayoutStyles.padT5,
                TextStyles.size16
            ]
        }
        return [...styles, ...styles2]
    }
}

export default MenuIcon