import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    componentWillMount() {
        this.props.problemTypeGetAllForCategory()
        this.setState({success: true})
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

export default ViewCategory