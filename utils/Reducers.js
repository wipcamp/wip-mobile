import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import FilerReducer from '../ducks/Filter'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    FilerReducer
})

export default combine