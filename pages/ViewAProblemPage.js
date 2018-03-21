import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator } from 'react-native'

import { get as problemGet } from '../utils/apiProblem'

import { get as profileGet } from '../utils/apiProfile'

import Topic from '../components/ViewTopicComponent'
import Description from '../components/ViewDescriptionComponent'
import Data from '../components/ViewDataComponent'
import SolveSwitch from '../components/ConnectViewSwitchComponent'

import ReportStyle from '../styles/reportProblemStyle'

class ViewAProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            reporter: null
        }
    }

    async componentWillMount() {
        let data = await problemGet(this.props.navigation.state.params.id)
        this.props.updateProblem(data)
        this.setState({
            data: data
        })
        await this.props.problemTypeGetAllForCategory()
        data = await profileGet(this.state.data.report_id)
        this.setState({
            reporter: data.nickname,
            loading: false
        })
    }

    render() {
        return (
            <View style={ReportStyle.bg}>
            { this.state.loading 
                ? <ActivityIndicator size="large" color="#ff8214" />
                : this.__renderData()
            }
            </View>
        )
    }

    __renderData() {
        return (
            <ScrollView>
                <Topic data={this.state.data} />
                <Data
                    left = "Category"
                    right = { this.props.categoryProblem
                        .filter(category => category.value == this.state.data.problem_type_id)
                        [0].label
                    }
                />
                <Data
                    left = "Date"
                    right = { this.state.data.created_at
                        .split(" ")[0]
                        .split("-")
                        .join("/")
                    }
                />
                <Description data={this.state.data} />
                <View style={ReportStyle.spacesBottom}>
                    <Data
                        left = "Reporter"
                        right = { this.state.reporter }
                    />
                </View>
                <SolveSwitch id={this.props.navigation.state.params.id} is_solve={true} />
                <SolveSwitch id={this.props.navigation.state.params.id} not_solve={true} />
            </ScrollView>
        )
    }
}

export default ViewAProblem