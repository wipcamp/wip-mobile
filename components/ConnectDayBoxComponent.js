import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setDate } from '../ducks/Date'

import DayBox from './DayBoxComponent'

const mapStateToProps = state => {
    return {
        date : state.DateReducer.date
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDate : bindActionCreators(setDate, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DayBox)