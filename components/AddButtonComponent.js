import React, { Component } from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'

import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        newproblem: state.NewProblemReducer.newProblem
    }
}

class AddButton extends Component {
    componentWillMount() {
        console.log(this.props)
    }

    render() {
        return (
            <Text
                style={Styles.addButton}
                onPress={async () => {
                    let api = await axios.post(`${env.API_URL}:8000/api/v1/problem/`, this.props.newproblem)
                    if (api.data == 'true') {
                        this.props.navigation.navigate('ComingSoon')
                    }
                    else {
                        console.log('Fail')
                    }
                }}
            >
                ADD
            </Text>
        )
    }
}

export default connect(mapStateToProps)(AddButton)


{/* <Text
style={Styles.addButon}
onPress={() => {
console.log(this.props)
}}
// onPress={async (_this) => {
//     try {
//         console.log('before state')
//         console.log('this object > ', _this )
//         let myprop = _this.props.newproblem
//         console.log('thisprops > ', myprop)
//         // console.log(api.data)
//         // let api = await axios.post(`${env.API_URL}:8000/api/v1/problem/`, myprop)                                                                
//         // let api = await axios.post(`${env.API_URL}:8000/api/v1/problem/`, {
//         //     topic: "Mobile",
//         //     problem_type_id: 1,
//         //     description: "test",
//         //     report_id: 1
//         // })
//     }
//     catch (error) {
//         console.log(error)    
//     }
// }}
>
ADD
</Text> */}