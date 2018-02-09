import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProblem } from '../ducks/ReportProblem'
import { get, put } from '../ducks/ProblemAPI'
import ViewSwitch from './ViewSwitchComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemGet : bindActionCreators(get, dispatch),
        problemPut : bindActionCreators(put, dispatch),
        updateProblem : bindActionCreators(updateProblem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitch)