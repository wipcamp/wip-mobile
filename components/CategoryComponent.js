import React, { Component } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class Category extends Component {

    componentWillMount() {
        this.props.problemTypeGetAllForCategory()
    }

    render() {
        return (
            <View style={ColorStyles.bgWhite}>
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
                    containerStyle={LayoutStyles.padLR10}
                />
            </View>
        )
    }
}

export default Category