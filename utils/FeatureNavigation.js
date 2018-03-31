import React from 'react'
import { TabNavigator, TabBarBottom } from 'react-navigation'
import { Icon } from 'native-base'

import MainPage from '../pages/NetMainPage'
import AllProblemPage from '../pages/NetViewAllProblemPage'
import TimetablePage from '../pages/NetTimetablePage'
import ReportProblemPage from '../pages/NetReportProblemPage'
import ProfilePage from '../pages/ProfilePage'

import NotiIcon from '../components/NotificationButtonComponent'
import TabIcon from '../components/TabIconComponent'
import AddButton from '../components/ConnectAddButtonComponent'

const FeatureNavigation = TabNavigator(
    {
        Main: {
            screen: MainPage,
            navigationOptions: ({ navigation }) => ({
                headerLeft: null,
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Home',
                tabBarIcon: ({focused}) => <TabIcon 
                    focus={focused}
                    ios='ios-home-outline' fios='ios-home'
                    android='md-home' fandroid='md-home'
                />
            })
        },
        AllProblem: {
            screen: AllProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'Problem',
                headerLeft: null,
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Problem',
                tabBarIcon: ({focused}) => <TabIcon
                    focus={focused}
                    ios='ios-search-outline' fios='ios-search'
                    android='md-search' fandroid='md-search'
                />
            })
        },
        Timetable: {
            screen: TimetablePage,
            navigationOptions: ({ navigation }) => ({
                title: 'TimeTable',
                headerLeft: null,
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Timtetable',
                tabBarIcon: ({focused}) => <TabIcon
                    focus={focused}
                    ios='ios-calendar-outline' fios='ios-calendar'
                    android='md-calendar' fandroid='md-calendar'
                />
            })
        },
        ReportProblem: {
            screen: ReportProblemPage,
            navigationOptions: ({ navigation }) => ({
                title: 'ReportProblem',
                headerLeft: null,
                headerRight: <AddButton navigation={navigation} />,
                tabBarLabel: 'Report',
                tabBarIcon: ({focused}) => <TabIcon
                    focus={focused}
                    ios='ios-create-outline' fios='ios-create'
                    android='md-create' fandroid='md-create'
                />                
            })
        },
        Profile: {
            screen: ProfilePage,
            navigationOptions: ({ navigation }) => ({
                title: 'Profile',
                headerLeft: null,
                headerRight: <NotiIcon navigation={navigation} />,
                tabBarLabel: 'Profile',
                tabBarIcon: ({focused}) => <TabIcon
                    focus={focused}
                    ios='ios-contact-outline' fios='ios-contact'
                    android='md-contact' fandroid='md-contact'
                />
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
            upperCaseLabel: false,
            activeTintColor: '#FF8214',
            inactiveTintColor: '#000',
            style: {
                backgroundColor: '#FFF',
                paddingTop: 5
            }
        }
    }
)

export default FeatureNavigation