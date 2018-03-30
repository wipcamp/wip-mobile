import { StackNavigator } from 'react-navigation'

import FeatureNavigator from './FeatureNavigation'

import LoginPage from '../pages/NetLoginPage'
import NotificationPage from '../pages/NetNotificationPage'
import TimetableDetailPage from '../pages/NetTimetableDetailPage'
import AnnouncePage from '../pages/NetAnnouncePage'
import AProblemPage from '../pages/NetViewAProblemPage'
import InternetNotFoundPage from '../pages/InternetNotFoundPage'

const MainNavigator = StackNavigator(
    {
        Feature: {
            screen: FeatureNavigator
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
                title: 'Notification'
            }
        },
        TimetableDetail: {
            path: 'timetable/:id',
            screen: TimetableDetailPage,
            navigationOptions: {
                title: 'Detail',
                gesturesEnabled: false
            }
        },
        Announce: {
            path: 'announce/:id',
            screen: AnnouncePage,
            navigationOptions: {
                title: 'Detail',
                gesturesEnabled: false
            }
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage,
            navigationOptions: {
                title: 'Detail',
                gesturesEnabled: false
            }
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