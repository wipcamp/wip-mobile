import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import ComingSoonPage from '../pages/ComingSoonPage'
import LoginPage from '../pages/LoginPage'
import ReportProblemPage from '../pages/ReportProblemPage'
import ErrorPage from '../pages/ErrorPage'
import AllProblemPage from '../pages/ViewAllProblemPage'
import MockAProblemPage from '../pages/MockViewAProblemPage'
import MockAllProblemPage from '../pages/MockViewAllProblemPage'

const MainNavigator = StackNavigator(
    {
        ComingSoon: {
            screen: ComingSoonPage
        },
        Login: {
            screen: LoginPage
        },
        ReportProblem: {
            screen: ReportProblemPage
        },
        Error: {
            screen: ErrorPage
        },
        AllProblem: {
            screen: AllProblemPage
        },
        MockAProblem: {
            screen: MockAProblemPage
        },
        MockAllProblem: {
            screen: MockAllProblemPage
        }
    }
)

export default connect()(MainNavigator)