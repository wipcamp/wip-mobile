import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddButton from './AddButtonComponent'
import { post } from '../ducks/ProblemAPI'

const mapStateToProps = state => {
    return {
        newproblem: state.NewProblemReducer.newProblem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemPost : bindActionCreators(post, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddButton)