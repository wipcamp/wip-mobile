import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'

import { get as problemGet, put as problemPut } from '../utils/apiProblem'
import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewSwitch extends Component {
    render() {
        return (
            <View
                style={this._renderStyle()}
            >
                <View style={[Styles.flex1]}>
                    <Text> {
                        this.props.is_solve
                        ? "is_solve"
                        : "not_solve"
                    } </Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Switch
                        value={
                            this.props.is_solve
                            ? this._renderSolveValue()[0]
                            : this._renderSolveValue()[1]
                        }
                        disabled={
                            this._renderSolveValue()[0] || this._renderSolveValue()[1]
                            ? true
                            : false
                        }
                        onValueChange={
                            async () => {
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
                                let result = await problemPut(this.props.id, value)
                                if(result == "true") {
                                    let data = await problemGet(this.props.id)
                                    this.props.updateProblem(data)
                                }
                            }
                        }
                    />
                </View>
            </View>
        )
    }

    _renderSolveValue() {
        let is_solve = this.props.problem
                        .filter(problem => problem.id == this.props.id)
                        [0].is_solve
        let not_solve = this.props.problem
                        .filter(problem => problem.id == this.props.id)
                        [0].not_solve
        let solveValue = [
            is_solve == 0 ? false : true
            , not_solve == 0 ? false : true
        ]
        return solveValue
    }

    _renderStyle() {
        let style = [
            ReportStyle.bgWhite,
            ReportStyle.inputPadding,
            Styles.row,
            Styles.border,
        ]
        let solve = this._renderSolveValue()
        if(this.props.not_solve && solve[0]) {
            style.push(Styles.disable)
        }
        if(this.props.is_solve && solve[1]) {
            style.push(Styles.disable)
        }

        return style
    }
}

export default ViewSwitch