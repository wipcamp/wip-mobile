import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ViewReporter from './ViewReporterComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

export default connect(mapStateToProps)(ViewReporter)