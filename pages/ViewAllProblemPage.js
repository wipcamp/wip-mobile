import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, ActivityIndicator } from 'react-native'

import { getAll as problemGetAll } from '../utils/apiProblem'
import FilterView from '../components/ConnectFilterViewComponent'
import ListCardProblem from '../components/ConnectListCardProblemComponent'
import ReportStyle from '../styles/reportProblemStyle'

class ViewAllProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentWillMount() {
        let datas = await problemGetAll()
        let problemCount =  await AsyncStorage.getItem('problemCount')
        if(problemCount == null | datas.length >= parseInt(problemCount)) {
            this.props.resetProblem()
            datas.map(data => {
                this.props.addProblem(data)
            })
            this.props.reverseProblem()
            this.setState({success: true})
        }
        await AsyncStorage.setItem('problemCount', `${datas.length}`)
    }

    render() {
        return (
            <ScrollView style={ReportStyle.bg}>
                <FilterView />
                { this.state.success
                    ? <ListCardProblem navigation={this.props.navigation} />
                    : <ActivityIndicator size="large" color="#ff8214" />
                }
            </ScrollView>
        )
    }
}

export default ViewAllProblem