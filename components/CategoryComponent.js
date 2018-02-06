import React, { Component } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'
import axios from 'axios'

import env from '../config'
import Styles from '../styles/reportProblemStyle'

class Category extends Component {

    componentWillMount() {
        this.props.problemTypeGetAll()
    }

    render() {
        return (
            <View style={Styles.bgWhite}>
                <Dropdown
                    label="Category"
                    data={this.props.categoryProblem}
                    onChangeText={(value, index, data) => {
                        this.props.setCategory(value)
                    }}
                    labelFontSize={20}
                    fontSize={18}
                    containerStyle={Styles.inputPadding}
                />
            </View>
        )
    }
}

export default Category