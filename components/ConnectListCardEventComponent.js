import { connect } from 'react-redux'

import ListCardEvent from './ListCardEventComponent'

const mapStateToProps = state => {
    return {
        timetable : state.TimetableReducer.timetable
    }
}

export default connect(mapStateToProps)(ListCardEvent)