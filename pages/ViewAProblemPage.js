import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { updateProblem } from '../ducks/ReportProblem'
import Topic from '../components/ConnectTopicInputComponent'
import Category from '../components/ConnectViewCategoryComponent'
import Date from '../components/ConnectViewDateComponent'
import Description from '../components/ConnectDescriptionInputComponent'
import Reporter from '../components/ConnectViewReporterComponent'
import SolveSwitch from '../components/ConnectViewSwitchComponent'
import ReportStyle from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProblem : bindActionCreators(updateProblem, dispatch)
    }
}

class ViewAProblem extends Component {
    async componentWillMount() {
        let api = await axios.get(`${env.API_URL}/problems/${this.props.navigation.state.params.id}`)
        let data = api.data
        this.props.updateProblem(data)
    }

    render() {
        return (
            <ScrollView style={ReportStyle.bg}>
                <Topic id={this.props.navigation.state.params.id} view={true} />
                <Category id={this.props.navigation.state.params.id} />
                <Date id={this.props.navigation.state.params.id} />
                <Description id={this.props.navigation.state.params.id} view={true} />
                <Reporter id={this.props.navigation.state.params.id} />
                <SolveSwitch id={this.props.navigation.state.params.id} is_solve={true} />
                <SolveSwitch id={this.props.navigation.state.params.id} not_solve={true} />                
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAProblem)