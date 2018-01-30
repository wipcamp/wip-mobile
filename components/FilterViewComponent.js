import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import axios from 'axios'

import env from '../config'
import { setFilter, addFilter } from '../ducks/Filter'
import ReportStyles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        filterView : state.FilterReducer.filterView,
        filter : state.FilterReducer.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addFilter : bindActionCreators(addFilter, dispatch),
        setFilter : bindActionCreators(setFilter, dispatch)
    }
}

class FilterView extends Component {

    async componentWillMount() {
        let api = await axios.get(`${env.API_URL}/problemtype/`)
        let datas = api.data
        datas.map(data => {
            let filter = {
                value: data.id,
                label: data.name
            }
            this.props.addFilter(filter)
        })
    }

    render() {
        return (
            <View style={[ ReportStyles.bgWhite, ReportStyles.spacesTop, ReportStyles.spacesBottom ]}>
                <Dropdown
                    label="Catagory"
                    data={this.props.filterView}
                    value={this.props.filter}
                    onChangeText={(value, index, data) => {
                        this.props.setFilter(value)
                    }}
                    labelFontSize={20}
                    fontSize={18}
                    containerStyle={ReportStyles.inputPadding}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterView)