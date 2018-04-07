import React, { Component } from 'react'
import { ScrollView, View, Text, RefreshControl } from 'react-native'
import moment from 'moment'

import { getByDate as timetableGetByDate } from '../utils/apiTimetable'

import ListCardEvent from '../components/ConnectListCardEventComponent'
import EventCard from '../components/EventCardComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
]

const campDay = [
    {
        day: '30-05',
        count: 1
    },
    {
        day: '31-05',
        count: 2
    },
    {
        day: '01-06',
        count: 3
    },
    {
        day: '02-06',
        count: 4
    },
    {
        day: '03-06',
        count: 5
    }
]

class Timetable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: '',
            loading: true
        }
    }

    async componentWillMount() {
        await this.fetchTimetable()
    }

    render() {
        return (
            <ScrollView
                style={[
                    LayoutStyles.flex1,
                    ColorStyles.bgGrey
                ]}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={async () => await this.fetchTimetable()}
                        colors={["#ff8214"]}
                        tintColor="#ff8214"
                        size={RefreshControl.SIZE.LARGE}
                    />
                }    
            >
                <Text
                    style={[
                        LayoutStyles.padTB10,
                        ColorStyles.bgWhite,
                        ColorStyles.borderBotBlack04,
                        TextStyles.kanit,
                        TextStyles.size18,
                        TextStyles.center
                    ]}
                >
                    {this.state.date}
                </Text>
                <ListCardEvent navigation={this.props.navigation} />
            </ScrollView>
        )
    }

    async fetchTimetable() {
        let m = moment('2018-06-01')
        let cday = 0
        campDay.map( cd => {
            let campday = m.format('DD-MM')
            if (cd.day == campday) {
                cday = cd.count
            }
        })
        this.setState({
            date: `${m.date()} ${months[m.month()]} ${m.year() + 543} (ค่ายวันที่ ${cday})`
        })
        let date = m.format('YYYY-MM-DD')
        this.props.resetTimetable()
        let datas = await timetableGetByDate(date)
        await Promise.all(datas.map(data => 
            this.props.addTimetable(data)
        ))
        this.props.sortTimetable()
        
        this.setState({
            loading: false
        })
    }
}

export default Timetable