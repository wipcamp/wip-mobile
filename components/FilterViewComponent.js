import React, { Component } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import ReportStyles from '../styles/reportProblemStyle'

class FilterView extends Component {

    componentWillMount() {
        this.props.problemTypeGetAllForFilter()
    }

    render() {
        return (
            <View style={[ ReportStyles.bgWhite, ReportStyles.spacesTop, ReportStyles.spacesBottom ]}>
                <Dropdown
                    label="Category"
                    data={this.props.filterView}
                    value={this.props.filter}
                    onChangeText={(value, index, data) => {
                        this.props.setFilter(value)
                    }}
                    labelFontSize={14}
                    labelPadding={0}
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    containerStyle={ReportStyles.inputPadding}
                />
            </View>
        )
    }
}

export default FilterView