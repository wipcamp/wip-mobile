import React, { Component } from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'

import { get as assignGet } from '../utils/apiAssign'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'

import Problem from '../src/images/gear.png'
import Timetable from '../src/images/calendar.png'
import Announce from '../src/images/announce.png'

const route = [
    {
        table: 'problems',
        navigate: 'AProblem',
        pic: Problem
    },
    {
        table: 'assigns',
        navigate: 'AProblem',
        pic: Problem
    },
    {
        table: 'timetables',
        navigate: 'TimetableDetail',
        pic: Timetable
    },
    {
        table: 'announces',
        navigate: 'Announce',
        pic: Announce
    }
]
class NotificationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            navigate: null,
            pic: null
        }
    }

    async componentWillMount() {
        let data = JSON.parse(this.props.data.data)
        await Promise.all(route.map(async r => {
            if (r.table == data.table) {
                this.setState({
                    navigate: r.navigate,
                    pic: r.pic
                })
                if (r.navigate == 'assigns') {
                    let assign = await assignGet(data.id)
                    this.setState({
                        id: assign.problem_id
                    })
                }
                else {
                    this.setState({
                        id: data.id
                    })
                }
            }
        }))
    }

    render() {
        return (
            <TouchableOpacity
                style={[
                    LayoutStyles.row,
                    LayoutStyles.padTB10,
                    LayoutStyles.padLR10,
                    ColorStyles.bgWhite,
                    ColorStyles.borderBotBlack04
                ]}
                onPress={ () => this.props.navigation.navigate(this.state.navigate, {id: this.state.id}) }
            >
                <View
                    style={[
                        LayoutStyles.flex02,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter
                    ]}
                >
                    <Image
                        style={ImageStyles.problemIcon}
                        source={this.state.pic}
                    />
                </View>
                <View
                    style={[
                        LayoutStyles.column,
                        LayoutStyles.flex08,
                        LayoutStyles.justifyCenter
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size18
                        ]}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                    >
                        {this.props.data.title}
                    </Text>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size16,
                            ColorStyles.textGray
                        ]}
                        ellipsizeMode='tail'
                        numberOfLines={2}
                    >
                        {this.props.data.body}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default NotificationCard