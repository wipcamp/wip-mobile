import { StackNavigator } from 'react-navigation'

import LoginPage from '../pages/NetLoginPage'

const loginNavigator = StackNavigator({
    Login: {
        screen: LoginPage,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
})

export default loginNavigator