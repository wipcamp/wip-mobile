import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Dropdown } from 'react-native-material-dropdown'
import axios from 'axios'

import env from '../config'
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

    async componentWillMount() {
        let api = await axios.get(`${env.API_URL}:8000/api/v1/problemtype/`)
        let datas = api.data
        datas.map(data => {
            let catagory = {
                value: data.id,
                label: data.name
            }
            this.props.addCatagory(catagory)
        })
    }

    render() {
        return (
            <View style={Styles.bgWhite}>
                <Dropdown
                    label="Catagory"
                    data={this.props.catagoryProblem}
                    onChangeText={(value, index, data) => {
                        this.props.setCatagory(value)
                    }}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catagory)