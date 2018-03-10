import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/ConnectMainPage'
import TimetableRolePage from '../pages/TimetableRolePage'
import AllProblemPage from '../pages/ViewAllProblemPage'
import AProblemPage from '../pages/ViewAProblemPage'
import ReportProblemPage from '../pages/ReportProblemPage'
import ErrorPage from '../pages/ErrorPage'
import NotAvailablePage from '../pages/NotAvailablePage'

const MainNavigator = StackNavigator(
    {
        Login: {
            screen: LoginPage
        },
        Main: {
            screen: MainPage
        },
        TimetableRole: {
            screen: TimetableRolePage
        },
        AllProblem: {
            screen: AllProblemPage
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage
        },
        ReportProblem: {
            screen: ReportProblemPage
        },
        Error: {
            screen: ErrorPage
        },
        NotAvailable: {
            screen: NotAvailablePage
        }
    }
)

export default connect()(MainNavigator)