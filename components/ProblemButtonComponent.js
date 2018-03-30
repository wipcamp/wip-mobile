import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { get as problemGet, put as problemPut } from '../utils/apiProblem'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ComponentStyles from '../styles/ComponentStyle'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewSwitch extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this._renderStyle()}
                onPress={async () => {
                    let value = {
                        is_solve: false,
                        not_solve: false
                    }
                    if(this.props.is_solve) {
                        value.is_solve = true
                    }
                    else {
                        value.not_solve = true
                    }
                    let result = await problemPut(this.props.data.id, value)
                    if(result == "true") {
                        let data = await problemGet(this.props.data.id)
                        this.props.updateProblem(data)
                    }
                    this.props.navigation.navigate('AllProblem')
                }}
            >
                <Text
                    style={[
                        TextStyles.size18,
                        TextStyles.center,
                        ColorStyles.textWhite
                    ]}
                >
                    { this.props.is_solve
                        ? "Solve"
                        : "Reject"
                    }
                </Text>
            </TouchableOpacity>
        )
    }

    _renderStyle() {
        let style = [
            LayoutStyles.flex04,
            ComponentStyles.button
        ]
        if(this.props.not_solve) {
            style.push(ComponentStyles.rejectButton)
        }
        if(this.props.is_solve) {
            style.push(ComponentStyles.solveButton)
        }

        return style
    }
}

export default ViewSwitch