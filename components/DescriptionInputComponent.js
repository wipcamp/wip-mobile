import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/reportProblemStyle'


class DescriptionInput extends Component {
    render() {
        return (
            <ScrollView style={[Styles.bgWhite, Styles.spacesTop]}>
                <TextField
                    label='Detail'
                    value={this.props.description}
                    onChangeText={(text) => {
                        this.props.setDescription(text)
                    }}
                    labelFontSize={14}
                    labelPadding={0}                    
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    multiline={true}
                    numberOfLine={5}
                    inputContainerStyle={Styles.inputField}
                    containerStyle={Styles.inputPadding}
                    labelTextStyle={Styles.inputLabel}
                />
            </ScrollView>
        )
    }
}

export default DescriptionInput