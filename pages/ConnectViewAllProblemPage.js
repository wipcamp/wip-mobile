import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addProblem, reverseProblem, resetProblem } from '../ducks/ReportProblem'

import ViewAllProblem from './ViewAllProblemPage'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem,
        filter : state.FilterReducer.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProblem : bindActionCreators(addProblem, dispatch),
        reverseProblem : bindActionCreators(reverseProblem, dispatch),
        resetProblem : bindActionCreators(resetProblem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllProblem)