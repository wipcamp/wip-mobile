import { connect } from 'react-redux'

import ListCardProblem from './ListCardProblemComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

export default connect(mapStateToProps)(ListCardProblem)