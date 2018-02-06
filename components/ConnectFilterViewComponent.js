import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getAllForFilter } from '../ducks/ProblemTypeAPI'
import FilterView from './FilterViewComponent'

const mapStateToProps = state => {
    return {
        filterView : state.FilterReducer.filterView,
        filter : state.FilterReducer.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        problemTypeGetAllForFilter : bindActionCreators(getAllForFilter, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterView)