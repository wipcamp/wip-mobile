import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/ViewProblemStyle'
import ReportStyles from '../styles/reportProblemStyle'

class ViewTopic extends Component {
    render() {
        return (
            <View style={[ReportStyles.bgWhite, ReportStyles.spacesTop]}>
                <TextField
                    label ='Topic'
                    value={this.props.topic}
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

export default ViewTopic 