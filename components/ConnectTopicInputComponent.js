import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemTopic } from '../ducks/NewProblem'
import TopicInput from './TopicInputComponent'

const mapStateToProps = state => {
    return {
        topic : state.NewProblemReducer.newProblem.topic,
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTopic : bindActionCreators(setNewProblemTopic, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
