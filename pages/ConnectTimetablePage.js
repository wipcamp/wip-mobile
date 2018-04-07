import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addTimetable, sortTimetable, resetTimetable } from '../ducks/Timetable'
import TimetablePage from './TimetablePage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addTimetable : bindActionCreators(addTimetable, dispatch),
        sortTimetable : bindActionCreators(sortTimetable, dispatch),
        resetTimetable : bindActionCreators(resetTimetable, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePage)