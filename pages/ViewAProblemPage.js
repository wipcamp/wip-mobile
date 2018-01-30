import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { updateProblem } from '../ducks/ReportProblem'
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
        let api = await axios.get(`${env.API_URL}/problem/${this.props.navigation.state.params.id}`)
        let data = api.data
        this.props.updateProblem(data)
    }

    render() {
        return (
            <ScrollView style={ReportStyle.bg}>
            </ScrollView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAProblem)