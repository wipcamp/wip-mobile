import React, { Component } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import { Icon } from 'native-base'

import { post as problemPost } from '../utils/apiProblem'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyle from '../styles/ColorStyle'

class AddButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={LayoutStyles.maR10}
                onPress={async () => {
                    let topic = this.props.newproblem.topic
                    let problem_type_id = this.props.newproblem.problem_type_id
                    let description = this.props.newproblem.description
                    let priority_id = this.props.newproblem.priority_id
                    if( topic != "" && problem_type_id != 0 && description != "" && priority_id != 0) {
                        let result = await problemPost(this.props.newproblem)
                        if (result == 'true') {
                            this.props.navigation.navigate('Main')
                        }
                        else {
                            Alert.alert(
                                'API Error'
                            )
                        }
                    }
                    else {
                        Alert.alert(
                            'Error',
                            'กรุณากรอกข้อมูลให้ครบถ้วน'
                        )
                    }
                }}
            >
                <Icon ios='ios-send' android='md-send' style={ColorStyle.textOrange} />
            </TouchableOpacity>
        )
    }
}

export default AddButton
