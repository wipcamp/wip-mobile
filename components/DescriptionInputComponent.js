import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/reportProblemStyle'


class DescriptionInput extends Component {
    render() {
        return (
            
            <ScrollView style={[Styles.bgWhite, Styles.spacesTop]}>
                <TextField  
                    multiline={true}
                    label='Detail'
                    value={this.__renderDescriptionValue()}
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
                    disabled={this.props.view ? true : false}
                />
            </ScrollView>
            
        )
    }

    __renderDescriptionValue() {
        let descriptionValue
        if(this.props.view) {
            descriptionValue = this.props.problem
                            .filter(problem => problem.id == this.props.id)
                            [0].description
        }
        else {
            descriptionValue = this.props.description
        }
        return descriptionValue 
    }
}

export default DescriptionInput