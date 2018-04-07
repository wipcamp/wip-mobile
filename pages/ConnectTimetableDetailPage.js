import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateTimetable } from '../ducks/Timetable'

import TimetableDetail from './TimetableDetailPage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        updateTimetable : bindActionCreators(updateTimetable, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimetableDetail)