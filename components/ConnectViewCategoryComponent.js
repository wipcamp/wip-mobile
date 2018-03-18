import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAllForCategory } from '../ducks/ProblemTypeAPI'
import ViewCategory from './ViewCategoryConponent'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemTypeGetAllForCategory : bindActionCreators(getAllForCategory, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCategory)