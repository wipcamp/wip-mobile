import { StackNavigator } from 'react-navigation'
import { connect } from 'react-redux'

import ComingSoonPage from '../pages/ComingSoonPage'
import LoginPage from '../pages/LoginPage'
import ReportProblemPage from '../pages/ReportProblemPage'

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
        }
    }
)

export default connect()(MainNavigator)