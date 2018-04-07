import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemPriorityId } from '../ducks/NewProblem'
import { addPriority } from '../ducks/Priority'
import Priority from './PriorityComponent'

const mapStateToProps = state => {
    return {
        priorityAll : state.PriorityReducer.priority
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPriority : bindActionCreators(addPriority, dispatch),
        setNewPriority : bindActionCreators(setNewProblemPriorityId, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Priority)