import { connect } from 'react-redux'

import ListCardProblem from './ListCardProblemComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem,
        filter : state.FilterReducer.filter
    }
}

export default connect(mapStateToProps)(ListCardProblem)