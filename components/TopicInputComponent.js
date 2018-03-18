import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/reportProblemStyle'

class TopicInput extends Component {
    render() {
        return (
            <View style={[Styles.bgWhite, Styles.spacesTop ]}>
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
                    containerStyle={Styles.inputPadding}
                />
            </View>
        )
    }
}

export default TopicInput