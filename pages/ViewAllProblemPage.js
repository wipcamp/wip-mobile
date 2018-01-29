import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { addProblem } from '../ducks/ReportProblem'
import FilterView from '../components/FilterViewComponent'

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

    async componentWillMount() {
        let api = await axios.get(`${env.API_URL}/problem/`)
        let datas = api.data
        datas.map(data => {
            this.props.addProblem(data)
        })
    }

    render() {
        return (
            <View>
                <FilterView />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllProblem)