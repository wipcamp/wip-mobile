import { combineReducers } from 'redux'

import InitReducer from '../ducks/InitState'
import ReportReducer from '../ducks/ReportProblem'
import NewProblemReducer from '../ducks/NewProblem'
import CategoryReducer from '../ducks/CategoryProblem'
import FilterReducer from '../ducks/Filter'
import TimetableReducer from '../ducks/Timetable'
import DateReducer from '../ducks/Date'
import AnnounceReducer from '../ducks/Announce'

const combine = combineReducers({
    InitReducer,
    ReportReducer,
    NewProblemReducer,
    CategoryReducer,
    FilterReducer,
    TimetableReducer,
    DateReducer,
    AnnounceReducer
})

export default combine