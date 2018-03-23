import React, { Component } from 'react'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

import { getAll as priorityGetAll } from '../utils/apiPriority'

import Styles from '../styles/reportProblemStyle'

class Priority extends Component {

    async componentWillMount() {
        if (this.props.priorityAll.length == 0) {
            let datas = await priorityGetAll()
            datas.map(data => {
                let filter = {
                    value: data.id,
                    label: data.name
                }
                this.props.addPriority(filter)
            })
        }
    }

    render() {
        return (
            <View style={Styles.bgWhite}>
                <Dropdown
                    label="Priority"
                    data={this.props.priorityAll}
                    onChangeText={(value, index, data) => {
                        this.props.setNewPriority(value)
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

export default Priority