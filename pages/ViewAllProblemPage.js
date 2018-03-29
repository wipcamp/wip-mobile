import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, ActivityIndicator, RefreshControl } from 'react-native'

import { getByRoleTeamId as assignGetByRoleTeamId, getByAssignedId as assignGetByAssignedId } from '../utils/apiAssign'
import { get as problemGet } from '../utils/apiProblem'

import ListCardProblem from '../components/ConnectListCardProblemComponent'

import ReportStyle from '../styles/reportProblemStyle'

class ViewAllProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        }
    }

    async componentDidMount() {
        await this.fetchProblem()
    }

    render() {
        return (
            <ScrollView
                style={ReportStyle.bg}
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.loading}
                      onRefresh={async () => await this.fetchProblem()}
                      colors={["#ff8214"]}
                      tintColor="#ff8214"
                      size={RefreshControl.SIZE.LARGE}
                    />
                }
            >
                <ListCardProblem
                    navigation={this.props.navigation}
                />
            </ScrollView>
        )
    }

    async fetchProblem() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)

        let problems = []
        let roleteams = user.roleteams
        roleteams.map(async roleteam => {
            let datas = await assignGetByRoleTeamId(roleteam)
            datas.map(data => {
                let problem_id = data.problem_id
                if (data.assigned_id == null && problems.indexOf(problem_id) == -1) {
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

        this.props.resetProblem()
        await Promise.all(problems.map(async id => {
            let data = await problemGet(id)
            this.props.addProblem(data)
            this.props.sortProblem()
        }))
        this.setState({loading: false})
    }
}

export default ViewAllProblem