import React, { Component } from 'react'
import { ScrollView, View, ActivityIndicator, AsyncStorage } from 'react-native'

import { getAll as getAnnounceAll } from '../utils/apiAnnounce'

import ListCardAnnounce from '../components/ConnectListCardAnnounceComponent'

import ReportStyles from '../styles/reportProblemStyle'

class AllAnnounce extends Component {
    constructor(props) {
        super(props)
        this.state = {
            success: false
        }
    }

    async componentWillMount() {
        let datas = await getAnnounceAll()
        let announceCount =  await AsyncStorage.getItem('announceCount')
        if(announceCount == null | datas.length >= parseInt(announceCount)) {
            this.props.resetAnnounce()
            datas.map(data => {
                this.props.addAnnounce(data)
            })
            this.props.reverseAnnounce()
            this.setState({success: true})
        }
        await AsyncStorage.setItem('announceCount', `${datas.length}`)
    }

    render() {
        return (
            <ScrollView style={ReportStyles.bg}>
                <View style={ReportStyles.spacesTop}>
                    { this.state.success
                        ? <ListCardAnnounce navigation={this.props.navigation} />
                        : <ActivityIndicator size="large" color="#ff8214" />
                    }
                </View>
            </ScrollView>
        )
    }
}

export default AllAnnounce