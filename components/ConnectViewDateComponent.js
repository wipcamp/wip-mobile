import { connect } from 'react-redux'

import ViewDate from './ViewDateComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

export default connect(mapStateToProps)(ViewDate)