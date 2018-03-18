import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AddButton from './AddButtonComponent'

const mapStateToProps = state => {
    return {
        newproblem: state.NewProblemReducer.newProblem
    }
}

export default connect(mapStateToProps)(AddButton)