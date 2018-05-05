import { SwitchNavigator } from 'react-navigation'

import AppNavigator from './AppNavigator'
import LoginNavigator from './LoginNavigator'
import LoadingPage from '../pages/LoadingPage'

const MainNavigator = SwitchNavigator(
    {
        loading: LoadingPage,
        auth: LoginNavigator,
        app: AppNavigator
    },
    {
        initialRouteName: 'loading'
    }
)

export default MainNavigator