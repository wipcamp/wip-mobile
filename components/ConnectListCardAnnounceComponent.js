import { connect } from 'react-redux'

import ListCardAnnounce from './ListCardAnnounceComponent'

const mapStateToProps = state => {
    return {
        announce : state.AnnounceReducer.announce
    }
}

export default connect(mapStateToProps)(ListCardAnnounce)