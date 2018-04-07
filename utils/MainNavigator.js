import React from 'react'
import { StackNavigator } from 'react-navigation'

import FeatureNavigator from './FeatureNavigation'

import LoginPage from '../pages/NetLoginPage'
import NotificationPage from '../pages/NetNotificationPage'
import TimetableDetailPage from '../pages/NetTimetableDetailPage'
import AnnouncePage from '../pages/NetAnnouncePage'
import AProblemPage from '../pages/NetViewAProblemPage'
import QrScanPage from '../pages/QrScanPage'
import ProfileCampPage from '../pages/NetProfileCampPage'
import InternetNotFoundPage from '../pages/InternetNotFoundPage'

import BackButton from '../components/BackButtonComponent'
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
            navigationOptions: ({ navigation }) => ({
                title: 'การแจ้งเตือน',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />
            })
        },
        TimetableDetail: {
            path: 'timetable/:id',
            screen: TimetableDetailPage,
            navigationOptions: ({ navigation }) => ({
                title: 'รายละเอียด',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        Announce: {
            path: 'announce/:id',
            screen: AnnouncePage,
            navigationOptions: ({ navigation }) => ({
                title: 'รายละเอียด',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'รายละเอียด',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        QrScan: {
            screen: QrScanPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Scan QR Code',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />,
                headerRight: <NotiIcon navigation={navigation} />
            })
        },
        ProfileCamp: {
            path: 'profile/:id',
            screen: ProfileCampPage,
            navigationOptions: ({ navigation }) => ({
                title: 'ประวัติน้อง',
                gesturesEnabled: true,
                headerLeft: <BackButton navigation={navigation} />,
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
    },
    {
        navigationOptions: {
            headerTitleStyle: {
                fontFamily: 'Kanit'
            }
        }
    }
)

export default MainNavigator