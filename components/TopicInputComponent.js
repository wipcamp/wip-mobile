import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class TopicInput extends Component {
    render() {
        return (
            <View
                style={ColorStyles.bgWhite}
            >
                <TextField
                    label ='Topic'
                    value={this.props.topic}
                    onChangeText={(text) => {
                        this.props.setTopic(text)
                    }}
                    labelFontSize={14}
                    labelPadding={0}                    
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    containerStyle={LayoutStyles.padLR10}
                />
            </View>
        )
    }
}

export default TopicInput