import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemReportId } from '../ducks/NewProblem'
import MainPage from './MainPage'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        setReportId : bindActionCreators(setNewProblemReportId, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)