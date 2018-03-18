import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { get as problemGet } from '../utils/apiProblem'
import { updateProblem } from '../ducks/ReportProblem'
import Topic from '../components/ConnectTopicInputComponent'
import Category from '../components/ConnectViewCategoryComponent'
import Date from '../components/ConnectViewDateComponent'
import Description from '../components/ConnectDescriptionInputComponent'
import Reporter from '../components/ConnectViewReporterComponent'
import SolveSwitch from '../components/ConnectViewSwitchComponent'
import ViewProblemStyle from '../styles/ViewProblemStyle'

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
    static navigationOptions = {
        title: 'Details'
    }

    async componentWillMount() {
        let data = await problemGet(this.props.navigation.state.params.id)
        this.props.updateProblem(data)
    }

    render() {
        return (
            <ScrollView style={ViewProblemStyle.bg}>
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