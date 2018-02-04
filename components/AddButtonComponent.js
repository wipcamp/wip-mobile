import React, { Component } from 'react'
import { Text, Alert } from 'react-native'
import axios from 'axios'

import env from '../config'
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
                    if( topic != "" && problem_type_id != 0 && description != "") {
                        let api = await axios.post(`${env.API_URL}/problems/`, this.props.newproblem)
                        if (api.data == 'true') {
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
