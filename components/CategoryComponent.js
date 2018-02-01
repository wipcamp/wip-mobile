import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import axios from 'axios'

import env from '../config'
import { addCategory } from '../ducks/CategoryProblem'
import { setNewProblemType } from '../ducks/NewProblem'
import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem,
        category : state.NewProblemReducer.newProblem.problem_type_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCategory : bindActionCreators(addCategory, dispatch),
        setCategory : bindActionCreators(setNewProblemType, dispatch)
    }
}

class Category extends Component {

    async componentWillMount() {
        if(this.props.categoryProblem.length == 0) {
            let api = await axios.get(`${env.API_URL}/problemtype/`)
            let datas = api.data
            datas.map(data => {
                let category = {
                    value: data.id,
                    label: data.name
                }
                this.props.addCategory(category)
            })
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(Category)