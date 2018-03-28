import { connect } from 'react-redux'

import ListCardNotification from './ListCardNotificationComponent'

const mapStateToProps = state => {
    return {
        notification : state.NotificationReducer.notification
    }
}

export default connect(mapStateToProps)(ListCardNotification)