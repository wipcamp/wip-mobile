import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer
})

export default combine