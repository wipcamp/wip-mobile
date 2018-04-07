import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addProblem, sortProblem, resetProblem } from '../ducks/ReportProblem'

import ViewAllProblem from './ViewAllProblemPage'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProblem : bindActionCreators(addProblem, dispatch),
        sortProblem : bindActionCreators(sortProblem, dispatch),
        resetProblem : bindActionCreators(resetProblem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllProblem)