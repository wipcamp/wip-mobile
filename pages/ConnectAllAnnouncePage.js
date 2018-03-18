import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addAnnounce, reverseAnnounce, resetAnnounce } from '../ducks/Announce'

import AllAnnounce from '../pages/AllAnnouncePage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addAnnounce : bindActionCreators(addAnnounce, dispatch),
        reverseAnnounce : bindActionCreators(reverseAnnounce, dispatch),
        resetAnnounce : bindActionCreators(resetAnnounce, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllAnnounce)