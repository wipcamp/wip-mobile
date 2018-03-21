import React from 'react'
import { StackNavigator } from 'react-navigation'

import LoginPage from '../pages/NetLoginPage'
import MainPage from '../pages/NetMainPage'
import TimetableRolePage from '../pages/NetTimetableRolePage'
import TimetablePage from '../pages/NetTimetablePage'
import AllAnnouncePage from '../pages/NetAllAnnouncePage'
import AnnouncePage from '../pages/NetAnnouncePage'
import AllProblemPage from '../pages/NetViewAllProblemPage'
import AProblemPage from '../pages/NetViewAProblemPage'
import ReportProblemPage from '../pages/NetReportProblemPage'
import ErrorPage from '../pages/ErrorPage'
import NotAvailablePage from '../pages/NotAvailablePage'
import InternetNotFoundPage from '../pages/InternetNotFoundPage'

import AddButton from '../components/ConnectAddButtonComponent'

const MainNavigator = StackNavigator(
    {
        Login: {
            screen: LoginPage,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        Main: {
            screen: MainPage,
            navigationOptions: {
                header: null,
                gesturesEnabled: false
            }
        },
        TimetableRole: {
            screen: TimetableRolePage,
            navigationOptions: {
                title: 'Time Schedule'
            }
        },
        Timetable: {
            path: 'timetable/:id',
            screen: TimetablePage,
            navigationOptions: {
                title: 'Time Schedule',
                gesturesEnabled: false
            }
        },
        AllAnnounce: {
            screen: AllAnnouncePage,
            navigationOptions: {
                title: 'Announcement'
            }
        },
        Announce: {
            path: 'announce/:id',
            screen: AnnouncePage,
            navigationOptions: {
                title: 'Announcement',
                gesturesEnabled: false
            }
        },
        AllProblem: {
            screen: AllProblemPage,
            navigationOptions: {
                title: 'Problem'
            }
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage,
            navigationOptions: {
                title: 'Details',
                gesturesEnabled: false
            }
        },
        ReportProblem: {
            screen: ReportProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'ReportProblem',
                headerRight: <AddButton navigation={navigation} />
            })
        },
        Error: {
            screen: ErrorPage,
            navigationOptions: {
                title: ''
            }
        },
        NotAvailable: {
            screen: NotAvailablePage,
            navigationOptions: {
                title: ''
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