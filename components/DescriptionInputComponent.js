import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { connect } from 'react-redux'

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
                <TextInput
                    placeholder="Detail"
                    value={this.props.description}
                    onChangeText={(text) => {
                        this.props.setDescription(text)
                    }}
                    style={[Styles.border]}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionInput)