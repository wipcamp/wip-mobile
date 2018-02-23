import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import LoginPage from '../pages/LoginPage'
import MainPage from '../pages/ConnectMainPage'
import ReportProblemPage from '../pages/ReportProblemPage'
import AllProblemPage from '../pages/ViewAllProblemPage'
import AProblemPage from '../pages/ViewAProblemPage'
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
        ReportProblem: {
            screen: ReportProblemPage
        },
        AllProblem: {
            screen: AllProblemPage
        },
        AProblem: {
            path: 'problem/:id',
            screen: AProblemPage
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