import React, { Component } from 'react'
import { View } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'

class MenuBar extends Component {
    render() {
        return (
            <View
                style={ this.__renderStyle() }
            >
                {this.props.children}
            </View>
        )
    }

    __renderStyle() {
        let styles = [
            LayoutStyles.flex0275,
            LayoutStyles.row,
        ]
        let styles2 = []
        if( this.props.top ) {
            styles2 = [
                LayoutStyles.justifyAround,
                LayoutStyles.padT15,
                LayoutStyles.padB10
            ]
        }
        else {
            styles2 = [
                LayoutStyles.justifyBetween,
                LayoutStyles.padT10,
                LayoutStyles.padB15,
                LayoutStyles.padLR05P,
            ]
        }

        return [...styles, ...styles2]        
    }
}

export default MenuBar