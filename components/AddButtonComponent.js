import React, { Component } from 'react'
import { Text, Alert } from 'react-native'

import { post as problemPost } from '../utils/apiProblem'
import Styles from '../styles/reportProblemStyle'

class AddButton extends Component {
    render() {
        return (
            <Text
                style={Styles.addButton}
                onPress={async () => {
                    let topic = this.props.newproblem.topic
                    let problem_type_id = this.props.newproblem.problem_type_id
                    let description = this.props.newproblem.description
                    let priority_id = this.props.newproblem.priority_id
                    if( topic != "" && problem_type_id != 0 && description != "" && priority_id != 0) {
                        let result = await problemPost(this.props.newproblem)
                        if (result == 'true') {
                            this.props.navigation.navigate('ComingSoon')
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
                ADD
            </Text>
        )
    }
}

export default AddButton
