import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import ReportStyles from '../styles/reportProblemStyle'
import Styles from '../styles/ViewProblemStyle'

class ViewDescription extends Component {
    render() {
        return (
            <View style={ReportStyles.spacesTop}>
                <TextField
                    label='Detail'
                    value={this.props.description}
                    disabled={false}
                    editable={false}
                    multiline={true}
                    labelFontSize={20}
                    labelPadding={7}                    
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    containerStyle={[
                        ReportStyles.inputPadding,
                        Styles.bgLabel,
                    ]}
                    labelTextStyle={[
                        Styles.textInTopicLabel,
                        Styles.marginTop10,
                    ]}
                />
            </View>
        )
    }
}

export default ViewDescription