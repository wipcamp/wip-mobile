import React, { Component } from 'react'
import { View } from 'react-native'

import TopicInput from '../components/ConnectTopicInputComponent'
import Category from '../components/ConnectCategoryCoponent'
import Priority from '../components/ConnectPriorityCoponent'
import Desciption from '../components/ConnectDescriptionInputComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class ReportProblem extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.flex1,
                    ColorStyles.bgGrey
                ]}
            >
                <TopicInput />
                <Category />
                <Priority />
                <Desciption />
            </View>
        )
    }
}

export default ReportProblem