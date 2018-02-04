import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemDescription } from '../ducks/NewProblem'
import DescriptionInput from './DescriptionInputComponent'

const mapStateToProps = state => {
    return {
        description : state.NewProblemReducer.newProblem.description,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDescription : bindActionCreators(setNewProblemDescription, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionInput)