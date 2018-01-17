import { combineReducers } from 'redux'

import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'

const combine = combineReducers({
    ReportReducer,
    NewProblemReducer
})

export default combine