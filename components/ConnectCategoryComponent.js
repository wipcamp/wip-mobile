import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemType } from '../ducks/NewProblem'
import { getAllForCategory } from '../ducks/ProblemTypeAPI'
import Category from './CategoryComponent'

const mapStateToProps = state => {
    return {
        categoryProblem : state.CategoryReducer.categoryProblem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemTypeGetAllForCategory : bindActionCreators(getAllForCategory, dispatch),
        setCategory : bindActionCreators(setNewProblemType, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)