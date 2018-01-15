import { TabNavigator } from 'react-navigation'

import ComingSoonPage from '../pages/ComingSoonPage'
import LoginPage from '../pages/LoginPage'

const MainNavigator = TabNavigator(
    {
        ComingSoon: {
            screen: ComingSoonPage
        },
        Login: {
            screen: LoginPage
        }
    }
)

export default MainNavigator