import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

class ViewTopic extends Component {
    render() {
        return (
            <View>
                <TextField
                    label ='Topic'
                    value={this.props.data.topic}
                    disabled={true}
                    multiline={true}
                />
            </View>
        )
    }
}

export default ViewTopic