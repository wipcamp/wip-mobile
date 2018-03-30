import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'native-base'

import MainPage from '../pages/NetMainPage'
import TimetablePage from '../pages/NetTimetablePage'
import AllProblemPage from '../pages/NetViewAllProblemPage'
import ReportProblemPage from '../pages/NetReportProblemPage'

import NotiIcon from '../components/NotificationButtonComponent'
import AddButton from '../components/ConnectAddButtonComponent'

const d = new Date(2018, 5, 1)
let year = d.getFullYear()
let month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
let date = `${year}-${month}-${day}`

const FeatureNavigation = TabNavigator(
    {
        Main: {
            screen: MainPage,
            navigationOptions: ({ navigation }) => ({
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Home',
                tabBarIcon: () => <Icon ios='ios-home' android='md-home' style={{color: '#FFF'}} />
            })
        },
        AllProblem: {
            screen: AllProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Problem',
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Problem',
                tabBarIcon: () => <Icon ios='ios-search' android='md-search' style={{color: '#FFF'}} />
            })
        },
        Timetable: {
            screen: TimetablePage,
            navigationOptions: ({ navigation }) => ({
                title: date,
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Timtetable',
                tabBarIcon: () => <Icon ios='ios-calendar' android='md-calendar' style={{color: '#FFF'}} />
            })
        },
        ReportProblem: {
            screen: ReportProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'ReportProblem',
                headerRight: <AddButton navigation={navigation} />,
                tabBarLabel: 'Report',
                tabBarIcon: () => <Icon ios='ios-create' android='md-create' style={{color: '#FFF'}} />                
            })
        },
        Profile: {
            screen: ReportProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Profile',
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Profile',
                tabBarIcon: () => <Icon ios='ios-contact' android='md-contact' style={{color: '#FFF'}} />
            })
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: true,
        tabBarOptions: {
            showIcon: true,
            showLabel: true,
            activeTintColor: '#FFF',
            activeBackgroundColor: '#FF8214',
            inactiveTintColor: '#FFF',
            inactiveBackgroundColor: '#C8C8C8'
        }
    }
)

export default FeatureNavigation