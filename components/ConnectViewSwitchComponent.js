import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProblem } from '../ducks/ReportProblem'
import ViewSwitch from './ViewSwitchComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProblem : bindActionCreators(updateProblem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewSwitch)