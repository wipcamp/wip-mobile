import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ProblemCard extends Component {
    async componentWillMount() {
        console.log("this props : ", this.props)
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AProblem', {id: this.props.data.id})}
            >
                <View
                    style={[Styles.row, (this.props.data.is_solve || this.props.data.not_solve)
                                            ? Styles.disable
                                            : ReportStyle.bgWhite]}
                >
                    <View style={[Styles.flex05, Styles.itemCenter]}>
                        <Text>[]</Text>
                    </View>
                    <View style={[Styles.column, Styles.flex4]}>
                        <Text style={Styles.topic}>
                            {this.props.data.topic.substr(0, 30) + '...'}
                        </Text>
                        <Text style={Styles.description}>
                            {this.props.data.description.substr(0, 50) + '...'}
                        </Text>
                    </View>
                    <View style={[Styles.flex1, Styles.itemCenter]}>
                        <Text style={Styles.date}>
                            {this.props.data.created_at.split(" ")[0]}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default connect()(ProblemCard)