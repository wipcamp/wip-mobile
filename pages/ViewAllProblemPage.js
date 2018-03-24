import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, ActivityIndicator } from 'react-native'

import { getByRoleTeamId as assignGetByRoleTeamId, getByAssignedId as assignGetByAssignedId } from '../utils/apiAssign'
import { get as problemGet } from '../utils/apiProblem'

import ListCardProblem from '../components/ConnectListCardProblemComponent'

import ReportStyle from '../styles/reportProblemStyle'

class ViewAllProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentDidMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)

        let problems = []
        let roleteams = user.roleteams
        roleteams.map(async roleteam => {
            let datas = await assignGetByRoleTeamId(roleteam)
            datas.map(data => {
                let problem_id = data.problem_id
                if (problems.indexOf(problem_id) == -1) {
                    problems.push(problem_id)                    
                }
            })
        })
        
        let datas = await assignGetByAssignedId(user.user_id)
        datas.map(data => {
            let problem_id = data.problem_id
            if (problems.indexOf(problem_id) == -1) {
                problems.push(problem_id)                    
            }
        })

        let problemCount =  await AsyncStorage.getItem('problemCount')
        if(problemCount == null || problems.length >= parseInt(problemCount)) {
            this.props.resetProblem()
            await Promise.all(problems.map(async id => {
                let data = await problemGet(id)
                this.props.addProblem(data)
            }))
            this.props.sortProblem()
            this.setState({success: true})
        }
        await AsyncStorage.setItem('problemCount', `${problems.length}`)

    }

    render() {
        return (
            <ScrollView style={ReportStyle.bg}>
                { this.state.success
                    ? <ListCardProblem navigation={this.props.navigation} />
                    : <ActivityIndicator size="large" color="#ff8214" />
                }
            </ScrollView>
        )
    }
}

export default ViewAllProblem