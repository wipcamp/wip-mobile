import React, { Component } from 'react'
import { View, Text, Switch } from 'react-native'

import { get as problemGet, put as problemPut } from '../utils/apiProblem'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewSwitch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            solve: []
        }
    }

    componentWillMount() {
        this.props.data.is_solve == 0
        ? this.setState({solve: [...this.state.solve, false]})
        : this.setState({solve: [...this.state.solve, true]})
        this.props.data.not_solve == 0
        ? this.setState({solve: [...this.state.solve, false]})
        : this.setState({solve: [...this.state.solve, true]})
    }

    render() {
        return (
            <View
                style={[
                    Styles.heightLabel,
                    this._renderStyle()
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text
                        style={[
                            Styles.topic,
                            Styles.marginTop5
                        ]}
                    >
                        {
                            this.props.is_solve
                            ? "Is_solve"
                            : "Not_solve"
                        }
                    </Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Switch
                        value={
                            this.props.is_solve
                            ? this.state.solve[0]
                            : this.state.solve[1]
                        }
                        disabled={
                            this.state.solve[0] || this.state.solve[1]
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
                        onTintColor={'#FF8214'}
                    />
                </View>
            </View>
        )
    }

    _renderStyle() {
        let style = [
            ReportStyle.bgWhite,
            ReportStyle.inputPadding,
            Styles.row,
            Styles.border,
        ]
        if(this.props.not_solve && this.state.solve[0]) {
            style.push(Styles.disable)
        }
        if(this.props.is_solve && this.state.solve[1]) {
            style.push(Styles.disable)
        }

        return style
    }
}

export default ViewSwitch