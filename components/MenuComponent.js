import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import Styles from '../styles/MainPageStyle'

class Menu extends Component {
    render() {
        return (
            <View style={[Styles.row, Styles.flex02, !this.props.end? Styles.borderBottom : null]}>
                <TouchableOpacity
                    style={[Styles.flex1, Styles.column, Styles.alignCenter, Styles.justifyCenter]}
                    onPress={() => this.props.leftFunction()}
                >
                    <Image
                        source={this.props.leftIcon}
                        style={ Styles.menuIcon }
                    />
                    <Text>{this.props.leftText}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[Styles.flex1, Styles.column, Styles.alignCenter, Styles.justifyCenter, Styles.borderLeft]}
                    onPress={() => this.props.rightFunction()}
                >
                    <Image
                        source={this.props.rightIcon}
                        style={ Styles.menuIcon }
                    />
                    <Text>{this.props.rightText}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Menu