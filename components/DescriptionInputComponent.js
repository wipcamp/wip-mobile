import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class DescriptionInput extends Component {
    render() {
        return (
            <ScrollView
                style={ColorStyles.bgWhite}
            >
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
                    containerStyle={LayoutStyles.padLR10}
                />
            </ScrollView>
        )
    }
}

export default DescriptionInput