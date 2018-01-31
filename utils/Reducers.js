import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CategoryReducer from '../ducks/CategoryProblem'
import FilterReducer from '../ducks/Filter'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CategoryReducer,
    FilterReducer
})

export default combine