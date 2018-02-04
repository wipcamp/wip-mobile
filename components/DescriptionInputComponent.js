import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/reportProblemStyle'


class DescriptionInput extends Component {
    render() {
        return (
            
            <View style={[Styles.bgWhite, Styles.spacesTop]}>
                <TextField  
                    multiline={true}
                    label='Detail'
                    value={this.__renderDescriptionValue()}
                    onChangeText={(text) => {
                        this.props.setDescription(text)
                    }}
                    labelFontSize={20}
                    fontSize={18}
                    containerStyle={Styles.inputPadding}
                    disabled={this.props.view ? true : false}
                />
            </View>
            
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