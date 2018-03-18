import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

class ViewDescription extends Component {
    render() {
        return (
            <View>
                <TextField
                    label='Detail'
                    value={this.props.data.description}
                    disabled={true}
                    multiline={true}
                />
            </View>
        )
    }
}

export default ViewDescription