import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateAnnounce } from '../ducks/Announce'

import Announce from './AnnouncePage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        updateAnnounce : bindActionCreators(updateAnnounce, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Announce)