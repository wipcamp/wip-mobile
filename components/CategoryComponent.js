import React, { Component } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import Styles from '../styles/reportProblemStyle'

class Category extends Component {

    componentWillMount() {
        this.props.problemTypeGetAllForCategory()
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
                    labelFontSize={14}
                    labelPadding={0}
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    containerStyle={Styles.inputPadding}
                />
            </View>
        )
    }
}

export default Category