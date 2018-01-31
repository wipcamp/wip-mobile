import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { addCatagory } from '../ducks/CatagoryProblem'
import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        catagoryProblem : state.CatagoryReducer.catagoryProblem,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCatagory : bindActionCreators(addCatagory, dispatch)
    }
}

class ViewCatagory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentWillMount() {
        if(this.props.catagoryProblem.length == 0) {
            let api = await axios.get(`${env.API_URL}/problemtype/`)
            let datas = api.data
            datas.map(data => {
                let catagory = {
                    value: data.id,
                    label: data.name
                }
                this.props.addCatagory(catagory)
            })
            this.setState({success: true})
        }
    }

    render() {
        return (
            <View
                style={[
                    ReportStyle.bgWhite,
                    ReportStyle.inputPadding,
                    Styles.row,
                    Styles.border,
                    Styles.padTopBot10
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text>Catagory</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text>{this.__renderCatagoryValue()}</Text>
                </View>
            </View>
        )
    }

    __renderCatagoryValue() {
        let catagoryId = this.props.problem
                            .filter(problem => problem.id == this.props.id)
                            [0].problem_type_id
        if(this.state.success) {
            let catagoryValue = this.props.catagoryProblem
                            .filter(catagory => catagory.value == catagoryId)
                            [0].label
            return catagoryValue
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCatagory)