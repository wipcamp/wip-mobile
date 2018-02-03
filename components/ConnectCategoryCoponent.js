import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addCategory } from '../ducks/CategoryProblem'
import { setNewProblemType } from '../ducks/NewProblem'
import Category from './CategoryComponent'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem,
        category : state.NewProblemReducer.newProblem.problem_type_id
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCategory : bindActionCreators(addCategory, dispatch),
        setCategory : bindActionCreators(setNewProblemType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)