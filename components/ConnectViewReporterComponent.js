import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { get } from '../ducks/ProfileAPI'
import ViewReporter from './ViewReporterComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        profileGet : bindActionCreators(get, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewReporter)