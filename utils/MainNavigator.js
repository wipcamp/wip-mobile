import React from 'react'
import { StackNavigator } from 'react-navigation'

import FeatureNavigator from './FeatureNavigation'

import LoginPage from '../pages/NetLoginPage'
import NotificationPage from '../pages/NetNotificationPage'
import TimetableDetailPage from '../pages/NetTimetableDetailPage'
import AnnouncePage from '../pages/NetAnnouncePage'
import AProblemPage from '../pages/NetViewAProblemPage'
import InternetNotFoundPage from '../pages/InternetNotFoundPage'

import NotiIcon from '../components/NotificationButtonComponent'

const MainNavigator = StackNavigator(
    {
        Feature: {
            screen: FeatureNavigator,
            navigationOptions: {
                gesturesEnabled: true
            }
        },
        Login: {
            screen: LoginPage,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        Notification: {
            screen: NotificationPage,
            navigationOptions: {
                title: 'Notification',
                gesturesEnabled: true
            }
        },
        TimetableDetail: {
            path: 'timetable/:id',
            screen: TimetableDetailPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Detail',
                gesturesEnabled: true,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        Announce: {
            path: 'announce/:id',
            screen: AnnouncePage,
            navigationOptions: ({ navigation }) => ({
                title: 'Detail',
                gesturesEnabled: true,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Detail',
                gesturesEnabled: true,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        InternetNotFound: {
            screen: InternetNotFoundPage,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        }
    }
)

export default MainNavigator