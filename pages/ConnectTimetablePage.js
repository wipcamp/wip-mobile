import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addTimetable, resetTimetable } from '../ducks/Timetable'
import TimetablePage from './TimetablePage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addTimetable : bindActionCreators(addTimetable, dispatch),
        resetTimetable : bindActionCreators(resetTimetable, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TimetablePage)