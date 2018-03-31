import React, { Component } from 'react'
import { ActivityIndicator, View, Text } from 'react-native'

import { get as announceGet } from '../utils/apiAnnounce'
import { get as roleteamGet } from '../utils/apiRoleTeam'

import DetailTopic from '../components/DetailTopicComponent'
import DetailData from '../components/DetailDataComponent'
import DetailDescription from '../components/DetailDescriptionCompoent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class AnnouncePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            to: null,
            loading: true
        }
    }

    async componentWillMount() {
        let data = await announceGet(this.props.navigation.state.params.id)
        this.setState({
            data: data,
        })
        data = await roleteamGet(data.role_team_id)
        this.setState({
            to: data.description,
            loading: false            
        })
    }

    render() {
        return (
            <View style={[
                LayoutStyles.flex1,
                ColorStyles.bgGrey
            ]}>
            { this.state.loading 
                ? <ActivityIndicator size="large" color="#ff8214" />
                : this.__renderData()
            }
            </View>
        )
    }

    __renderData() {
        return (
            <View>
                <DetailTopic topic={`เรื่อง ${this.state.data.topic}`} />
                <DetailData>
                    <Text style={TextStyles.size16}>ถึง : {this.state.to}</Text>
                </DetailData>
                <DetailDescription>
                    <Text style={TextStyles.size16}>{this.state.data.description}</Text>
                </DetailDescription>
            </View>
        )
    }
}

export default AnnouncePage