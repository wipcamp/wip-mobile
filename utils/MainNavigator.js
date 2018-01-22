import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import ComingSoonPage from '../pages/ComingSoonPage'
import LoginPage from '../pages/LoginPage'
import ReportProblemPage from '../pages/ReportProblemPage'
import ErrorPage from '../pages/ErrorPage'
import AProblemPage from '../pages/ViewAProblemPage'
import AllProblemPage from '../pages/ViewAllProblemPage'

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
        AProblem: {
            screen: AProblemPage
        },
        AllProblemPage: {
            screen: AllProblemPage
        }
    }
)

export default connect()(MainNavigator)