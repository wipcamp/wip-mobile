import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemType } from '../ducks/NewProblem'
import { getAll } from '../ducks/ProblemTypeAPI'
import Category from './CategoryComponent'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem,
        category : state.NewProblemReducer.newProblem.problem_type_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemTypeGetAll : bindActionCreators(getAll, dispatch),
        setCategory : bindActionCreators(setNewProblemType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)