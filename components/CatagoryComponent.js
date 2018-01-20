import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import axios from 'axios'

import { addCatagory } from '../ducks/CatagoryProblem'
import { setNewProblemType } from '../ducks/NewProblem'
import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        catagoryProblem : state.CatagoryReducer.catagoryProblem,
        catagory : state.NewProblemReducer.newProblem.problemType
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCatagory : bindActionCreators(addCatagory, dispatch),
        setCatagory : bindActionCreators(setNewProblemType, dispatch)
    }
}

class Catagory extends Component {

    componentWillMount() {

    }

    render() {
        let mockData = [
            { value: 1, label: "Banana" },
            { value: 2, label: "Mango" },
            { value: 3, label: "Pear" },
            { value: 4, label: "Apple" },
            { value: 5, label: "Pineapple" }
        ]

        return (
            <View style={Styles.bgWhite}>
                <Dropdown
                    label="Catagory"
                    data={mockData}
                    onChangeText={(value, index, data) => {
                        this.props.setCatagory(value)
                    }}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catagory)