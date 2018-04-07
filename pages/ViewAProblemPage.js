import React, { Component } from 'react'
import { AsyncStorage, ActivityIndicator, ScrollView, View, Text } from 'react-native'

import { get as problemGet } from '../utils/apiProblem'
import { get as profileGet } from '../utils/apiProfile'
import { getAll as priorityGetAll } from '../utils/apiPriority'
import { getByProblemId as assignGetByProblemId } from '../utils/apiAssign'

import DetailTopic from '../components/DetailTopicComponent'
import DetailData from '../components/DetailDataComponent'
import DetailDescription from '../components/DetailDescriptionCompoent'
import ProblemButton from '../components/ConnectProblemButtonComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class ViewAProblem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true,
            reporter: null,
            assign: false
        }
    }

    async componentWillMount() {
        if (this.props.priority.length == 0) {
            let datas = await priorityGetAll()
            datas.map(data => {
                let filter = {
                    value: data.id,
                    label: data.name
                }
                this.props.addPriority(filter)
            })
        }
        let data = await problemGet(this.props.navigation.state.params.id)
        this.props.updateProblem(data)
        this.setState({
            data: data
        })

        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        let roleteams = user.roleteams
        
        let datas = await assignGetByProblemId(data.id)

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

        await this.props.problemTypeGetAllForCategory()
        data = await profileGet(this.state.data.report_id)
        this.setState({
            reporter: data.nickname,
            loading: false
        })
    }

    render() {
        return (
            <View
                style={[
                    LayoutStyles.flex1,
                    ColorStyles.bgGrey
                ]}
            >
            { this.state.loading 
                ? <ActivityIndicator size="large" color="#ff8214" />
                : this.__renderData()
            }
            </View>
        )
    }

    __renderData() {
        return (
            <ScrollView>
                <DetailTopic topic={`ปัญหา : ${this.state.data.topic}`} />
                <DetailData>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size16
                        ]}
                    >
                        สำคัญ : {this.__renderPriority()}
                    </Text>
                </DetailData>
                <DetailData>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size16
                        ]}
                    >
                        ประเภท : {this.__renderCategory()}
                    </Text>
                </DetailData>
                <DetailDescription>
                    <Text style={TextStyles.size16}>{this.state.data.description}</Text>
                </DetailDescription>
                { !this.state.assign
                    ? null
                    : this.__renderSwitch()
                }
                
            </ScrollView>
        )
    }

    __renderCategory() {
        let categoryProblem = this.props.categoryProblem.filter(category => category.value == this.state.data.problem_type_id)
        return categoryProblem.length == 0 ? "ไม่ระบุ" : categoryProblem[0].label
    }

    __renderPriority() {
        let priority = this.props.priority.filter(pr => pr.value == this.state.data.priority_id)
        return priority.length == 0 ? "ไม่ระบุ" : priority[0].label
    }

    __renderSwitch() {
        return (
            <View
                style={[
                    LayoutStyles.padT15,
                    LayoutStyles.row,
                    LayoutStyles.justifyAround
                ]}
            >
                <ProblemButton
                    data={this.state.data}
                    not_solve={true}
                    navigation={this.props.navigation}
                />
                <ProblemButton
                    data={this.state.data}
                    is_solve={true}
                    navigation={this.props.navigation}
                />
            </View>
        )
    }
}

export default ViewAProblem