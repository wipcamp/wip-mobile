import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'

import env from '../config'
import { addCategory } from '../ducks/CategoryProblem'
import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCategory : bindActionCreators(addCategory, dispatch)
    }
}

class ViewCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentWillMount() {
        if(this.props.categoryProblem.length == 0) {
            let api = await axios.get(`${env.API_URL}/problemtypes/`)
            let datas = api.data
            datas.map(data => {
                let category = {
                    value: data.id,
                    label: data.name
                }
                this.props.addCategory(category)
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
                    Styles.border
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text>Category</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text>{this.__renderCategoryValue()}</Text>
                </View>
            </View>
        )
    }

    __renderCategoryValue() {
        let categoryId = this.props.problem
                            .filter(problem => problem.id == this.props.id)
                            [0].problem_type_id
        if(this.state.success) {
            let categoryValue = this.props.categoryProblem
                            .filter(category => category.value == categoryId)
                            [0].label
            return categoryValue
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory)