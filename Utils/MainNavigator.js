import { TabNavigator } from "react-navigation"
import ComingSoon from "../Pages/ComingSoonPage"

const MainNavigator = TabNavigator({
    ComingSoon: {
        screen: ComingSoon
    }
})

export default MainNavigator