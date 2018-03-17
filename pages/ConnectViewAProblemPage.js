import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateProblem } from '../ducks/ReportProblem'
import { getAllForCategory } from '../ducks/ProblemTypeAPI'

import ViewAProblem from './ViewAProblemPage'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem,
        categoryProblem : state.CategoryReducer.categoryProblem,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateProblem : bindActionCreators(updateProblem, dispatch),
        problemTypeGetAllForCategory : bindActionCreators(getAllForCategory, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewAProblem)