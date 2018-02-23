import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CategoryReducer from '../ducks/CategoryProblem'
import FilterReducer from '../ducks/Filter'
import TimetableReducer from '../ducks/Timetable'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CategoryReducer,
    FilterReducer,
    TimetableReducer
})

export default combine