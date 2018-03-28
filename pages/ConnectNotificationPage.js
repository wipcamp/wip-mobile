import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addNotification, reverseNotification, resetNotification } from '../ducks/Notification'
import NotificationPage from './NotificationPage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addNotification : bindActionCreators(addNotification, dispatch),
        reverseNotification : bindActionCreators(reverseNotification, dispatch),
        resetNotification : bindActionCreators(resetNotification, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationPage)