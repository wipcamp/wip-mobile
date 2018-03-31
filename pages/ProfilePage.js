import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, Text } from 'react-native'

import DetailData from '../components/DetailDataComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <ScrollView
                style={[
                    LayoutStyles.column,
                    LayoutStyles.flex1,
                    ColorStyles.bgGrey
                ]}
            >
                <View
                    // style={}
                >

                </View>
            </ScrollView>
        )
    }
}

export default Profile