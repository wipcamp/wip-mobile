import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'

import { setNewProblemDescription } from '../ducks/NewProblem'
import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        description : state.NewProblemReducer.newProblem.description,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDescription : bindActionCreators(setNewProblemDescription, dispatch)
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionInput)