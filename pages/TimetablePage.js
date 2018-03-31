import React, { Component } from 'react'
import { ScrollView, View, Text, RefreshControl } from 'react-native'

import { getByDate as timetableGetByDate } from '../utils/apiTimetable'

import ListCardEvent from '../components/ConnectListCardEventComponent'
import EventCard from '../components/EventCardComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

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
        let d = new Date(2018, 5, 1)
        let year = d.getFullYear()
        let month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
        let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        let date = `${year}-${month}-${day}`
        this.setState({
            date: date
        })
        this.props.resetTimetable()
        let datas = await timetableGetByDate(date)
        await Promise.all(datas.map(data => 
            this.props.addTimetable(data)
        ))
        this.props.sortTimetable()
        this.setState({loading: false})
    }
}

export default Timetable