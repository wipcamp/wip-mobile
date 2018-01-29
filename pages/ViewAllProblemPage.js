import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { addProblem } from '../ducks/ReportProblem'
import FilterView from '../components/FilterViewComponent'
import ReportStyle from '../styles/reportProblemStyle'
import Test from '../components/ProblemCardComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProblem : bindActionCreators(addProblem, dispatch)
    }
}

class ViewAllProblem extends Component {
    static navigationOptions = {
        title: 'Problem'
    }

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentWillMount() {
        let api = await axios.get(`${env.API_URL}/problem/`)
        let datas = api.data
        datas.map(data => {
            this.props.addProblem(data)
        })
        if(this.props.problem.length == datas.length) {
            this.setState({success: true})
        }
    }

    render() {
        return (
            <View style={ReportStyle.bg}>
                <FilterView />
                {this.state.success
                    ? <Test data={this.props.problem[0]} navigation={this.props.navigation} />
                    : this.__renderLoading()
                }
            </View>
        )
    }

    __renderLoading() {
        return (
            <View style={ReportStyle.bg}>
                <ActivityIndicator size="large" color="#ff8214" />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllProblem)