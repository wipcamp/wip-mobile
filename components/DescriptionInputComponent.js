import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'

import { setNewProblemDescription } from '../ducks/NewProblem'
import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        description : state.NewProblemReducer.newProblem.description
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
            
            <View style={ Styles.bgWhite }>
                <TextField  multiline={true}
                    label='Detail'
                    value={this.props.description}
                    onChangeText={(text) => {
                        this.props.setDescription(text)
                        
                    }}
                    style={[Styles.topicWhite,Styles.borderDetail]}
                />
            </View>
            
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionInput)