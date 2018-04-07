import React, { Component } from 'react'
import { ActivityIndicator, View, Text, FlatList } from 'react-native'
import { Icon } from 'native-base'

import { get as timetableGet } from '../utils/apiTimetable'
import { get as roleteamGet } from '../utils/apiRoleTeam'

import DetailTopic from '../components/DetailTopicComponent'
import DetailDescription from '../components/DetailDescriptionComponent'
import DetailData from '../components/DetailDataComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ComponentStyles from '../styles/ComponentStyle'

class TimetableDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            role: null,
            isNavi: false,
            loading: true,
            delete: false
        }
    }

    async componentWillMount() {
        let data = await timetableGet(this.props.navigation.state.params.id)
        if (data.length == 0) {
            this.setState({
                delete: true,
                loading: false
            })
        }
        else {
            this.props.updateTimetable(data)
            this.setState({
                data: data
            })
            data = await roleteamGet(data.role_team_id)
            let isNavi = data.display_name == 'NAVIGATOR' ? true : false
            this.setState({
                role: data.display_name,
                isNavi: isNavi,
                loading: false
            })
        }
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
        if (this.state.delete) {
            return (
                <View
                    style={[
                        LayoutStyles.flex1,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter,
                        ColorStyles.bgOrange
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size24,
                            ColorStyles.textWhite
                        ]}
                    >
                        ตารางเวลานี้ถูกลบแล้วไป
                    </Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <DetailTopic topic={`กิจกรรม ${this.state.data.event}`} />
                    <DetailData>
                        <Text
                            style={[
                                TextStyles.kanit,
                                TextStyles.size16
                            ]}
                        >
                            ถึง : {this.state.role}
                        </Text>
                    </DetailData>
                    <DetailData>
                        <Icon
                            ios='ios-pin'
                            android='md-pin'
                        />
                        <Text
                            style={[
                                LayoutStyles.padL10,
                                TextStyles.kanit,
                                TextStyles.size16
                            ]}
                        >
                            { this.state.data.location }
                        </Text>
                    </DetailData>
                    { this.state.isNavi
                        ? null
                        : this.__renderTime()
                    }
                    <DetailDescription>
                        { this.state.isNavi
                            ? this.__renderDescription()
                            : <Text >{ this.state.data.description }</Text>
                        }
                    </DetailDescription>                
                </View>
            )
        }
    }

    __renderTime() {
        let start = this.state.data.start_on
                    .split(' ')[1]
                    .split(':')
        let end = this.state.data.finish_on
                    .split(' ')[1]
                    .split(':')
        return (
            <DetailData>
                <Icon
                    ios='ios-alarm-outline'
                    android='md-alarm'
                />
                <Text
                    style={[
                        LayoutStyles.padL10,
                        TextStyles.kanit,
                        TextStyles.size16
                    ]}
                >
                    { `${start[0]}.${start[1]} น. - ${end[0]}.${end[1]} น.` }
                </Text>
            </DetailData>
        )
    }

    __renderDescription() {
        let data = []
        let description = this.state.data.description.split(',')
        description.map(desc => data.push({place: desc}))
        return (
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => (
                    <View
                        style={[
                            LayoutStyles.row,
                            LayoutStyles.padT8,
                            LayoutStyles.padL10
                        ]}
                    >
                        <View
                            style={[
                                LayoutStyles.alignCenter,
                                LayoutStyles.justifyCenter,
                            ]}
                        >
                            <View style={ComponentStyles.point} />
                        </View>
                        <View>
                            <Text
                                style={[
                                    LayoutStyles.padL10,
                                    TextStyles.kanit,
                                    TextStyles.size16
                                ]}
                            >
                                {item.place}
                            </Text>
                        </View>
                    </View>
                )}
            />
        )
    }
}

export default TimetableDetail