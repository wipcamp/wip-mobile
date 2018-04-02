import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, AsyncStorage } from 'react-native'

import { getByProblemId as assignGetByProblemId } from '../utils/apiAssign'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

import dot from '../src/images/new-message.png'

class ProblemCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            assign: false
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        let roleteams = user.roleteams
        
        let datas = await assignGetByProblemId(this.props.data.id)

        let result = datas.findIndex(data => {
            if (data.assigned_id == null) {
                return roleteams.indexOf(data.role_team_id) != -1
            }
            else {
                return data.assigned_id == user.user_id
            }
        })
        if (result != -1) {
            this.setState({
                assign: true
            })
        }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AProblem', {id: this.props.data.id})}
            >
                <View
                    style={[
                        Styles.row,
                        Styles.border,
                        Styles.padTopBot10,
                        (this.props.data.is_solve || this.props.data.not_solve)
                            ? Styles.disable
                            : ReportStyle.bgWhite
                    ]}
                >
                    <View style={[Styles.flex05, Styles.itemCenter, Styles.marginTop5]}>
                        {
                            this.state.assign
                            ? <Image source={dot} />
                            : null
                        }
                    </View>
                    <View style={[Styles.column, Styles.flex4]}>
                        <Text style={Styles.topicForAllView}>
                            {
                                this.props.data.topic.lenght <= 25
                                ? this.props.data.topic.substr(0, 25)
                                : this.props.data.topic.substr(0, 25) + '...'
                            }
                        </Text>
                        <Text style={Styles.description}>
                            {
                                this.props.data.topic.description <= 50
                                ? this.props.data.description.substr(0, 50)
                                : this.props.data.description.substr(0, 50) + '...'
                            }
                        </Text>
                    </View>
                    <View style={[Styles.flex1, Styles.itemCenter]}>
                        <Text style={[Styles.date, Styles.marginTop5]}>
                            {
                                this.props.data.created_at
                                    .split(" ")[0]
                                    .split("-")
                                    .join("/")
                            }
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ProblemCard